import React from 'react'

function Editor(props) {
    return (
      <div className="flexitem">
        <div className="bar" tabIndex="0">
          <h3><b>Input window</b></h3>
        </div>
        <textarea
          id="editor"
          className="editor"
          value={props.text}
          spellCheck="false"
          onChange={props.handleChange}
        />
      </div>
    )
  }

export default Editor;