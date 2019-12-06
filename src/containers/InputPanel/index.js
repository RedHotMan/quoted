import React, { useState, useRef, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { store } from 'react-notifications-component';
import { isTweetUrl, getUserIdAndTweetIdFromUrl } from '../../utils/utils';
import { FormWrapper, InputText, SubmitButton } from './style';

const InputPanel = props =>  {
  let urlInputRef = useRef();
  const [url, setUrl] = useState('');
  const [isUrlValid, setUrlValid] = useState(null);

  const dispatch = useDispatch();
  const { getTweetQuotes } = dispatch.app;

  useEffect(() => {
    if (urlInputRef.current) {
      urlInputRef.current.focus();
    }
  }, [urlInputRef])

  const onUrlChange = e => {
    setUrl(e.target.value);
    if (isUrlValid !== null) {
      setUrlValid(null);
    }
  }

  const onSubmitClick = e => {
    e.preventDefault();
    if (isUrlValid === null) {
      if (isTweetUrl(url)) {
        setUrlValid(true)
        const tweetInfo = getUserIdAndTweetIdFromUrl(url);
        getTweetQuotes(tweetInfo);
      } else {
        setUrlValid(false)

        store.addNotification({
          title: 'Nope.',
          message: '🤔 This is not a tweet url…',
          type: 'danger',
          insert: 'top',
          container: 'top-right',
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          width: 350,
          dismiss: {
            duration: 3000,
            onScreen: true,
            pauseOnHover: true,
          },
        });

      }
    }
  }

  return (
    <FormWrapper>
      <form>
        <InputText
          type="text"
          placeholder="Paste a tweet link here…"
          value={url}
          ref={urlInputRef}
          onChange={onUrlChange}
          backgroundColor={() => {
            if (isUrlValid !== null && !isUrlValid) {
              return '#F6DCDF';
            }
          }}
        />
        <SubmitButton disabled={props.isLoading || isUrlValid === false} onClick={onSubmitClick}>
          Search
        </SubmitButton>
      </form>
    </FormWrapper>
  );
}

const mapStateToProps = state => ({
  isLoading: state.loading.effects.app.getTweetQuotes,
});

export default connect(mapStateToProps, null)(InputPanel);
