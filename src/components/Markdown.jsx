import React, {useContext} from 'react';
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import context from '../context';

export default function Markdown() {

const { markdownText } = useContext(context);

  return (
    <div className="app__markdown">
        <ReactMarkdown children={markdownText} remarkPlugins={[remarkGfm]} />
    </div>
  )
}
