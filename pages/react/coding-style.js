
import { Fragment } from 'react';
import ReactMarkdown from 'react-markdown';

import Head from '../../components/Head';
import HeroSection from '../../hoc/HeroSection';
import ReactMarkdownWithCode from '../../components/ReactMarkdownWithCode';
import GitHubMarkdownWrapper from '../../hoc/GitHubMarkdownWrapper';
import { codingStylePatterns } from '../../data/react/coding-style';
import { pages } from '../../utils/links';

const CodingStyle = () => (
  <>
    <Head title={pages.react.codingStyle.title} />
    <HeroSection>
      <GitHubMarkdownWrapper>
        {/* ray test touch < */}
        { codingStylePatterns.map(codingStylePattern => (
          <Fragment key={codingStylePattern.id}>
            <ReactMarkdown source={codingStylePattern.description} />
            <ReactMarkdownWithCode source={codingStylePattern.codeSnippet} />
          </Fragment>
        )) }
        {/* ray test touch > */}
      </GitHubMarkdownWrapper>
    </HeroSection>
  </>
);

export default CodingStyle;
