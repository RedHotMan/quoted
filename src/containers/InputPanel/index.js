import React, { useState, useRef, useEffect } from 'react';
import { isTweetUrl } from '../../utils/utils';
import { FormWrapper, InputText, SubmitButton } from './style';

const InputPanel = () =>  {
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

export default InputPanel;
