import React from 'react'
import { useState } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import Editor from './Editor';
import Preview from './Preview';
// default text  
const defaultText =
       `# Welcome to my Markdown Previewer!

## I love h2 headings!

### h3 headings are okay, I guess

This is my first ever **React** app and I built it for a *freeCodeCamp* [Front End Libraries Project](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer). 

Right, that's bold, italic and a link out of the way! Here's a list of random stuff followed by an image of a sweaty Swedish guitar legend:
* coffee
* cake
* types of nut:
  * brazil
  * hazelnut
  * cashew
    * salted
    * honey roasted (decadent!)
    * raw

Here's an inspiring quote from **Avery Brooks**:
> Knowledge is going to make you stronger. Knowledge is going to let you control your life. Knowledge is going to give you the wisdom to teach their children. Knowledge is the thing that makes you smile in the face of disaster.

Of course, we can also format inline code, such as \`const meaningOfLife = 42;\`, as well as code blocks:

\`\`\`
// this is some of my React code
ReactDOM.render(<App />, document.getElementById('root'));
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

![freecodecamp.png](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

function Input() {
    const [text, setState] = useState(defaultText)
  
    const getMarkdown = () => {
      // parse markdown text using Marked library
      const htmlMarkup = marked.parse(text)
  
      // clean up HTML to mitigate XSS risk
      const cleanMarkup = DOMPurify.sanitize(htmlMarkup)
  
      // prepare html for use with dangerouslySetInnerHTML attribute
      return { __html: cleanMarkup }
    }
  
    const handleChange = event => {
      setState(event.target.value)
    }
  
    return (
      <div className="windows-container">
        <Editor handleChange={handleChange} text={text} />
        <Preview getMarkdown={getMarkdown()} />
      </div>
    )
  }

export default Input;