
import { Fragment } from 'react';

import HeroSection from '../../hoc/HeroSection';
import GitHubMarkdownWrapper from '../../hoc/GitHubMarkdownWrapper';
import Head from '../../components/Head';
import ReactMarkdownWithRenderers from '../../components/ReactMarkdownWithRenderers';
import ReactCodeBlock from '../../components/ReactCodeBlock';
import { codingStylePatterns } from '../../data/react/coding-style';
import { pages } from '../../utils/links';

const CodingStyle = () => (
  <>
    <Head title={pages.react.codingStyle.title} />
    <HeroSection>
      <GitHubMarkdownWrapper>
        { codingStylePatterns.map((codingStylePattern, index) => (
          <Fragment key={codingStylePattern.id}>
            <ReactMarkdownWithRenderers source={codingStylePattern.description(index + 1)} />
            <ReactCodeBlock
              value={codingStylePattern.codeSnippet}
              linesInPrimary={codingStylePattern.linesInPrimary}
              linesInSecondary={codingStylePattern.linesInSecondary} />
          </Fragment>
        )) }
      </GitHubMarkdownWrapper>
    </HeroSection>
  </>
);

export default CodingStyle;
