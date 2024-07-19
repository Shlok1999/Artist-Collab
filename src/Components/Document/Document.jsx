// src/components/Document.js
import React, { useState, useRef, useEffect } from 'react';
import '../../Styles/Document.css';
import { useParams } from 'react-router-dom';
import useSocket from '../../Sockets/config'; // Ensure the correct import path

function Document() {
  const { roomName } = useParams(); // Destructure correctly
  const { documentContent, sendDocumentUpdate } = useSocket(roomName); // Destructure correctly

  const editorRef = useRef(null);
  const [initDocState, setInitDocState] = useState(() => {
    return localStorage.getItem('documentContent') || "Write your own story...";
  });

  const formatText = (command, value = null) => {
    document.execCommand(command, false, value);
    editorRef.current.focus();
  };

  useEffect(() => {
    const handleInput = () => {
      const content = editorRef.current.innerHTML;
      localStorage.setItem('documentContent', content);
      sendDocumentUpdate(content);
    };
    const editor = editorRef.current;
    editor.addEventListener('input', handleInput);

    return () => {
      editor.removeEventListener('input', handleInput);
    };
  }, [sendDocumentUpdate]);

  useEffect(() => {
    if (documentContent) {
      editorRef.current.innerHTML = documentContent;
    }
  }, [documentContent]);

  return (
    <div className="document-editor">
      <div className="toolbar">
        <button onClick={() => formatText('bold')}><b>B</b></button>
        <button onClick={() => formatText('italic')}><i>I</i></button>
        <button onClick={() => formatText('underline')}><u>U</u></button>
        <button onClick={() => formatText('formatBlock', 'H1')}>H1</button>
        <button onClick={() => formatText('formatBlock', 'H2')}>H2</button>
        <button onClick={() => formatText('formatBlock', 'P')}>P</button>
      </div>
      <div className="other-elements"></div>
      <div
        onClick={() => setInitDocState(localStorage.getItem('documentContent'))}
        ref={editorRef}
        className="editor"
        contentEditable
        suppressContentEditableWarning={true}
        dangerouslySetInnerHTML={{ __html: initDocState }}
      >
      </div>
    </div>
  );
}

export default Document;
