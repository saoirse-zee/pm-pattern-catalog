## Headings

```type
{
  "headings": [98,28,21,16,14,12],
  "font": "sans-serif",
  "color": "#00263e"
}
```


## Usage on dark backgrounds
Use a lighter weight, but make sure to maintain enough contrast to ensure visibility.

```type|span-3,kern,smoothen,single
{
    "headings": [42],
    "background": "#00263e",
    "color": "#a1c0d8",
    "font": "sans-serif",
    "weight": 100
}
```


## Accessibility
Make sure that the text has enough contrast with the background so that it is legible by all readers. We follow the [WCAG guidelines on contrast ratios](https://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-contrast).

A few examples:

```type|span-4,kern,smoothen
    {
        "headings": [42],
        "background": "#f5f5f5",
        "color": "#efefef",
        "font": "sans-serif"
    }
```

```hint|span-2,warning
Does not meet even the lowest WCAG contrast standard. You can hardly see it, right?
```

```type|span-4,kern,smoothen
    {
        "headings": [42],
        "background": "#f5f5f5",
        "color": "#888",
        "font": "sans-serif"
    }
```

```hint|span-2,directive
Passes Level **AA** for large text
```


```type|span-4,kern,smoothen,shorter
    {
        "headings": [42],
        "paragraphs": ["14/24"],
        "background": "#f5f5f5",
        "color": "#333",
        "font": "sans-serif"
    }
```

```hint|span-2,directive
Passes Level **AAA** even for small text
```
