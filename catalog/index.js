import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

// Lightning Design system files can be imported from node_modules.
// Import our Patman styles like this.
import globalStyles from './styles.css';
// is there a good way to modularize styles?

const pages = [
  {
    path: "/",
    title: "Welcome",
    content: pageLoader(() => import("./WELCOME.md"))
  },
  {
    path: "/button",
    title: "Button",
    content: pageLoader(() => import("./button.md"))
  },
];

const pageGroup = [{
  title: 'My pages',
  pages,
}]

ReactDOM.render(
  <Catalog
    title="Catalog"
    pages={pageGroup}
  />,
  document.getElementById("catalog")
);
