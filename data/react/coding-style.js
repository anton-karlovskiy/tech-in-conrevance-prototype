
// ray test touch <
const codingStylePatterns = [
{
id: 'folder-structure',
description: `
## Folder, File and Variable Text Decoration  

1.  Component: PascalCase \`e.g. LeftSideDrawer/index.js\`
2.  Secondary File: kebab-case \`e.g. left-side-drawer.css (left-side-drawer.module.css)\`
3.  Constants: UPPER SNAKE_CASE \`e.g. API_KEY\`
`,
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
};`
},
];

export {
  codingStylePatterns
};
// ray test touch >
