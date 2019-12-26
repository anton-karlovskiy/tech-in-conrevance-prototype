
import Link from 'next/link';
import { useRouter } from 'next/router';

import theme from '../../../../styles/theme';

const NavitationListItem = ({ title, href, as }) => {
  const { asPath } = useRouter();

  return (
    <li>
      <Link href={href} as={as}>
        <a>
          {title}
          <span />
        </a>
      </Link>
      <style jsx>{`
        li:hover {
          color: #fff;
          ${theme.animation.linkHoveringEffect}
        }
        a {
          position: relative;
          display: inline-block;
          line-height: 48px;
          ${theme.animation.linkHoveringEffect}
        }
        a > span {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 4px;
          background: #fff;
          transform: scaleY(${asPath === href ? 1 : 0});
          transform-origin: bottom;
          transition: transform 235ms cubic-bezier(.4,0,.2,1);
        }
        @media only screen and (min-width: ${theme.breakpoints.md}px) {
          a {
            line-height: 72px;
            margin: 0 16px;
          }
        }
      `}</style>
    </li>
  );
};

export default NavitationListItem;
