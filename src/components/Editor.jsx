import React, {useContext} from 'react'
import context from '../context';

export default function Editor() {

  const { setMarkdownText } = useContext(context);

  const onTextChange = e => {
    const newVal = e.currentTarget.value;
    setMarkdownText(newVal);
  }

  return (
    <div className="app__editor">
      <textarea onChange={onTextChange}></textarea>
    </div>
  )
}
