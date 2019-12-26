
import ReactMarkdown from 'react-markdown';

import ReactCodeBlock from '../ReactCodeBlock';
import HeadingRenderer from './HeadingRenderer';

const ReactMarkdownWithRenderers = ({ source, ...rest }) => (
  <ReactMarkdown
    source={source}
    renderers={{
      code: ReactCodeBlock,
      heading: HeadingRenderer
    }}
    {...rest} />
);

export default ReactMarkdownWithRenderers;
