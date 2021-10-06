import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Prism from 'prismjs';
import 'prismjs/themes/prism-coy.css';
import marked from 'marked';
import './App.scss';

function App() {
  const [text, setText] = useState('');
  const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

  useEffect(() => {
    setText(placeholder);
  }, []);

  return (
    <Container fluid className="App">
      <Row>
        <h1 className="title">Preview Your Markdown</h1>
      </Row>
      <Row>
        <Col className="previewWrap editorWrap">
          <h2 className="title">Editor</h2>
          <textarea
            className="form-control"
            id="editor"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Col>
        <Col className="previewWrap">
          <h2 className="title">Previewer</h2>
          <div
            className="form-control"
            id="preview"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: marked(text, {
                gfm: true,
                breaks: true,
                highlight: (code) => Prism.highlight(code, Prism.languages.javascript),
              }),
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
