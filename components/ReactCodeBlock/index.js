
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import okaidia from 'react-syntax-highlighter/dist/esm/styles/prism/okaidia';

import theme from '../../styles/theme';

const ReactCodeBlock = ({ value, linesInPrimary = [], linesInSecondary = [] }) => (
  <SyntaxHighlighter
    wrapLines={true}
    lineProps={lineNumber => {
      let style = {display: 'block'};
      if (linesInPrimary.includes(lineNumber)) {
        style.backgroundColor = theme.palette.highlight.primary;
      }
      else if (linesInSecondary.includes(lineNumber)) {
        style.backgroundColor = theme.palette.highlight.secondary;
      }
      return {style};
    }}
    showLineNumbers
    language='jsx'
    style={okaidia}>
    {value}
  </SyntaxHighlighter>
);

export default ReactCodeBlock;
