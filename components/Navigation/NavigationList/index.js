
import NavitationListItem from './NavitationListItem';
import { pages } from '../../../utils/links';
import theme from '../../../styles/theme';

const NavigationList = () => (
  <nav>
    <ul className='no-bullet'>
      <NavitationListItem
          title={pages.home.title}
          href={pages.home.href}
          as={pages.home.as} />
      { Object.entries(pages.react).map(([key, value]) => (
        <NavitationListItem
          key={key}
          title={value.title}
          href={value.href}
          as={value.as} />
      )) }
      <style jsx>{`
        ul {
          display: flex;
          font-size: 16px;
        }
        ul:hover {
          color: #9e9e9e;
          ${theme.animation.linkHoveringEffect}
        }
        @media screen and (max-width: ${theme.breakpoints.md - 1}px) {
          ul {
            position: absolute;
            left: 0;
            right: 0;
            top: 64px;

            width: 100%;
            justify-content: space-evenly;
          }
        }
      `}</style>
    </ul>
  </nav>
);

export default NavigationList;
