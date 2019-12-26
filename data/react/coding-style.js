
const codingStylePatterns = [
{
id: 'file-naming',
description: number => (`
## #${number} Folder, File and Variable Text Decoration  

1.  Component: PascalCase \`e.g. LeftSideDrawer/index.js\`
2.  Secondary File: kebab-case \`e.g. left-side-drawer.css (left-side-drawer.module.css)\`
3.  Constants: UPPER SNAKE_CASE \`e.g. API_KEY\`
`),
codeSnippet: 
`import FOOTER_MENU_ITEMS from 'utils/links/footer-menu-items';

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <FooterLeft />
      <FooterMenuList menuItems={FOOTER_MENU_ITEMS} />
      <FooterRight />
    </footer>
  );
};`,
linesInPrimary: [1, 3, 9],
linesInSecondary: []
},
{
id: 'commenting',
description: number => (`
## #${number} Generally comments are not required in the codebase but for some important parts, comments can be added.

For progressive enhancement, \`TODO:\` comment should be added.
`),
codeSnippet: 
`const HeaderBar = ({ title,  tabValue }) => {
  const classes = useStyles();
  const flag = tabValue !== 2; // TODO: hardcoded for UI development

  return (
    <div className={classes.root}>
      <Typography variant='body2' color='textSecondary' className={classes.grow}>{title}</Typography>
      <CalendarPagination className={classes.calendarPagination} invisible={flag} />
    </div>
  );
};`,
linesInPrimary: [3],
linesInSecondary: []
},
{
id: 'console-log',
description: number => (`## #${number} Console logs must be removed in production version and in development process, console logs should follow such a consistent style that it can be identified (developer & position).`),
codeSnippet: 
`// src/utils/quicklink/index.mjs
const listen = options => {
...  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        observer.unobserve(entry = entry.target);
        console.log('ray : [utils quicklink listen] entry.pathname => ', entry.pathname);
        if (toPrefetch.size < limit) {
          toAdd(() => {
            if (chunks) {
              console.log('ray : [utils quicklink listen] fetching chunk URLs not page URLs');
              Object.entries(chunks).forEach(([route, urls]) => {
                const isMatch = regexparam(route).pattern.test(entry.pathname);
                if (isMatch) {
                  urls.forEach(url => {
                    console.log('ray : [utils quicklink listen] url => ', url);
                    prefetch(url, options.priority).then(isDone).catch(err => {
                      isDone(); if (options.onError) options.onError(err);
                    });
                  });
                }
              });
            } else {
              console.log('ray : [utils quicklink listen] fetching page URLs not chunk URLs');
              prefetch(entry.href, options.priority).then(isDone).catch(err => {
                isDone(); if (options.onError) options.onError(err);
              });
            }
          });
        }
      }
    });
  });
...
};`,
linesInPrimary: [8, 12, 17, 25],
linesInSecondary: [1]
},
{
id: 'single-quote',
description: number => (`## #${number} Single quotes are recommended rather than double quotes.`),
codeSnippet: 
`import React from 'react';

const HeroSection = ({ children }) => (
  <section className='hero'>
    {children}
    <style jsx>{\`
      .hero {
        padding: 152px 0 48px 0;
      }
    \`}</style>
  </section>
);`,
linesInPrimary: [1, 4],
linesInSecondary: []
},
{
id: 'line-break',
description: number => (`
## #${number} There should be a line break between npm packages imports and custom files imports.

Empty lines could be reserved at the top and bottom of every file.
`),
codeSnippet: 
`
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TopAppBar from 'containers/TopAppBar';
import SideDrawer from 'containers/SideDrawer';
import Footer from 'containers/Footer';

const Layout = ({ children }) => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className={classes.root}>
      <div className={classes.body}>
        <TopAppBar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        <SideDrawer  mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        <main className={classes.main}>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

`,
linesInPrimary: [4],
linesInSecondary: [1, 26]
},
{
id: 'no-return',
description: number => (`
## #${number} Unnecessary \`return\` statement could be removed.
`),
codeSnippet: 
`const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Layout>
      App
    </Layout>
  </ThemeProvider>
);`,
linesInPrimary: [1, 8],
linesInSecondary: []
},
];

export {
  codingStylePatterns
};
