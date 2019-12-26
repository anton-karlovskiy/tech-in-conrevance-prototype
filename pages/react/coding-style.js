
import Head from '../../components/Head';
import HeroSection from '../../hoc/HeroSection';
import ReactMarkdownWithCode from '../../components/ReactMarkdownWithCode';
import GitHubMarkdownWrapper from '../../hoc/GitHubMarkdownWrapper';
import { reactHooksDoc } from '../../data/react-hooks';
import { pages } from '../../utils/links';

const CodingStyle = () => (
  <>
    <Head title={pages.react.codingStyle.title} />
    <HeroSection>
      <GitHubMarkdownWrapper>
        <ReactMarkdownWithCode source={reactHooksDoc} />
      </GitHubMarkdownWrapper>
    </HeroSection>
  </>
);

export default CodingStyle;
