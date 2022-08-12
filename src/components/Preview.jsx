import React from 'react'

function Preview(props) {
    return (
      <div className="flexitem">
        <div className="bar">
          <h3 tabIndex="0"><b>Preview window</b></h3>
        </div>
        <div
          id="preview"
          className="preview"
          dangerouslySetInnerHTML={props.getMarkdown}
          tabIndex="0"
        ></div>
      </div>
    )
  }

export default Preview;