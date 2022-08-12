import React from 'react'
import { marked } from 'marked';
function Header() {
    return (
      <header>
        <h1 className="text-center h1" tabIndex="0">
          Markup my Markdown!
        </h1>
      </header>
    )
  }
  
  // set options for Marked
  marked.setOptions({
    breaks: true, // adds <br> on single line breaks
    headerIds: false // disables auto header ids
  })

export default Header;