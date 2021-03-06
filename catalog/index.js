import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

// Import Bootstrap css and make it globally available:
import 'bootstrap/dist/css/bootstrap.min.css'

// Import our Patman styles like this:
import globalStyles from './styles.css';
// It's kinda dumb to put our styles in the global space, but works for demonstration purposes.

const fundamentals = {
  title: 'Fundamentals',
  pages: [
    {
      path: '/palette',
      title: 'Palette',
      content: pageLoader(() => import('./catalog-pages/palette.md'))
    },
    {
      path: '/typography',
      title: 'Typography',
      content: pageLoader(() => import('./catalog-pages/typography.md'))
    },
  ]
}

const components = {
  title: 'Components',
  pages: [
    {
      imports: { Button: require('./components/Button.jsx') },
      path: "/button",
      title: "Button",
      content: pageLoader(() => import("./catalog-pages/button.md"))
    },
    {
      imports: { EventInstanceItem: require('./components/EventInstanceItem.jsx') },
      path: "/event-instance-item",
      title: "EventInstanceItem",
      content: pageLoader(() => import("./catalog-pages/event-instance-item.md"))
    },
    {
      imports: { EventInstanceList: require('./components/EventInstanceList.jsx') },
      path: "/event-instance-list",
      title: "EventInstanceList",
      content: pageLoader(() => import("./catalog-pages/event-instance-list.md"))
    }
  ]
}

const pages = [
  {
    path: "/",
    title: "Welcome",
    content: pageLoader(() => import("./catalog-pages/WELCOME.md"))
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
