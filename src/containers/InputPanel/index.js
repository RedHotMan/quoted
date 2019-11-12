import React, { useState, useRef, useEffect } from 'react';
import { FormWrapper, InputText, SubmitButton } from './style';

const InputPanel = () =>  {
  const urlInputRef = useRef(null);
  const [url, setUrl] = useState('');

  useEffect(() => {
    urlInputRef.current.focus();
  })

  const onUrlChange = e => {
    setUrl(e.target.value);
  }

  const onSubmitClick = e => {
    e.preventDefault();
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
        />
        <SubmitButton btnLabel="Search" onClick={onSubmitClick} />
      </form>
    </FormWrapper>
  )
}

export default InputPanel;
