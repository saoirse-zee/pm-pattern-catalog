webpackJsonp([0],{587:function(n,e,t){var s=t(6),a=t(32),o=t(210).PageRenderer;o.__esModule&&(o=o.default);var r=a({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:t(592)}},componentWillMount:function(){},render:function(){return s.createElement(o,Object.assign({},this.props,{content:this.state.content}))}});r.__catalog_loader__=!0,n.exports=r},592:function(n,e){n.exports='## Headings\n\n```type\n{\n  "headings": [98,28,21,16,14,12],\n  "font": "sans-serif",\n  "color": "#00263e"\n}\n```\n\n\n## Usage on dark backgrounds\nUse a lighter weight, but make sure to maintain enough contrast to ensure visibility.\n\n```type|span-3,kern,smoothen,single\n{\n    "headings": [42],\n    "background": "#00263e",\n    "color": "#a1c0d8",\n    "font": "sans-serif",\n    "weight": 100\n}\n```\n\n\n## Accessibility\nMake sure that the text has enough contrast with the background so that it is legible by all readers. We follow the [WCAG guidelines on contrast ratios](https://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-contrast).\n\nA few examples:\n\n```type|span-4,kern,smoothen\n    {\n        "headings": [42],\n        "background": "#f5f5f5",\n        "color": "#efefef",\n        "font": "sans-serif"\n    }\n```\n\n```hint|span-2,warning\nDoes not meet even the lowest WCAG contrast standard. You can hardly see it, right?\n```\n\n```type|span-4,kern,smoothen\n    {\n        "headings": [42],\n        "background": "#f5f5f5",\n        "color": "#888",\n        "font": "sans-serif"\n    }\n```\n\n```hint|span-2,directive\nPasses Level **AA** for large text\n```\n\n\n```type|span-4,kern,smoothen,shorter\n    {\n        "headings": [42],\n        "paragraphs": ["14/24"],\n        "background": "#f5f5f5",\n        "color": "#333",\n        "font": "sans-serif"\n    }\n```\n\n```hint|span-2,directive\nPasses Level **AAA** even for small text\n```\n'}});
//# sourceMappingURL=0.a7f565f3.chunk.js.map