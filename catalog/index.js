import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

// Lightning Design system files can be imported from node_modules.
// Import our Patman styles like this.
import globalStyles from './styles.css';
// is there a good way to modularize styles?

const fundamentals = {
  title: 'Fundamentals',
  pages: [
    {
      path: '/palette',
      title: 'Palette',
      content: pageLoader(() => import('./palette.md'))
    },
    {
      path: '/typography',
      title: 'Typography',
      content: pageLoader(() => import('./typography.md'))
    },
  ]
}

const components = {
  title: 'Components',
  pages: [
    {
      path: "/button",
      title: "Button",
      content: pageLoader(() => import("./button.md"))
    }
  ]
}

const pages = [
  {
    path: "/",
    title: "Welcome",
    content: pageLoader(() => import("./WELCOME.md"))
  },
  fundamentals,
  components,
];

ReactDOM.render(
  <Catalog
    title="Catalog"
    pages={pages}
  />,
  document.getElementById("catalog")
);
