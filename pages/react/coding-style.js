
import { Fragment } from 'react';

import Head from '../../components/Head';
import HeroSection from '../../hoc/HeroSection';
import ReactMarkdownWithRenderers from '../../components/ReactMarkdownWithRenderers';
import ReactCodeBlock from '../../components/ReactCodeBlock';
import GitHubMarkdownWrapper from '../../hoc/GitHubMarkdownWrapper';
import { codingStylePatterns } from '../../data/react/coding-style';
import { pages } from '../../utils/links';

const CodingStyle = () => (
  <>
    <Head title={pages.react.codingStyle.title} />
    <HeroSection>
      <GitHubMarkdownWrapper>
        {/* ray test touch < */}
        { codingStylePatterns.map((codingStylePattern, index) => (
          <Fragment key={codingStylePattern.id}>
            <ReactMarkdownWithRenderers source={codingStylePattern.description} />
            <ReactCodeBlock value={codingStylePattern.codeSnippet} />
          </Fragment>
        )) }
        {/* ray test touch > */}
      </GitHubMarkdownWrapper>
    </HeroSection>
  </>
);

export default CodingStyle;
