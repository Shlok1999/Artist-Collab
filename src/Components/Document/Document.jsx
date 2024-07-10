import React, { useState, useRef } from 'react';
import '../../Styles/Document.css';

function Document() {
  const editorRef = useRef(null);
  const [initDocState, setInitDocState] = useState("Write your story...");

  const formatText = (command, value = null) => {
    document.execCommand(command, false, value);
    editorRef.current.focus();
  };

  

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
      <div className="other-elements">

      </div>
      <div
      onClick={()=>setInitDocState("")}
        ref={editorRef}
        className="editor"
        contentEditable
        suppressContentEditableWarning={true}
      >
        <p style={{marginLeft: '0.5rem'}}>{initDocState}</p>
      </div>
    </div>
  );
}

export default Document;
