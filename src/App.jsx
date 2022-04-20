import React, {useState} from 'react';
import Editor from './components/Editor'
import Markdown from './components/Markdown'
import './App.css';
import context from './context';

function App() {

    const [markdownText, setMarkdownText] = useState("");

    const contextValue = {
        markdownText,
        setMarkdownText
    };

    return ( 
        <context.Provider value={contextValue}>
            <div className="app">
                <Editor/>
                <Markdown />
            </div>
        </context.Provider>
    );
}

export default App;