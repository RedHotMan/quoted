import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { isTweetUrl, getUserIdAndTweetIdFromUrl } from '../../utils/utils';
import { FormWrapper, InputText, SubmitButton } from './style';

const InputPanel = props =>  {
  const urlInputRef = useRef(null);
  const [url, setUrl] = useState('');
  const [isUrlValid, setUrlValid] = useState(null);

  useEffect(() => {
    urlInputRef.current.focus();
  })

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
        props.getTweetQuotes(tweetInfo);
      } else {
        setUrlValid(false)
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
        <SubmitButton disabled={isUrlValid} btnLabel="Search" onClick={onSubmitClick} />
      </form>
    </FormWrapper>
  );
}

const mapStateToProps = state => ({
  tweets: state.app.tweets,
});

const mapDispatchToProps = dispatch => ({
  getTweetQuotes: (tweetInfo) => dispatch.app.getTweetQuotes(tweetInfo),
})

export default connect(mapStateToProps, mapDispatchToProps)(InputPanel);
