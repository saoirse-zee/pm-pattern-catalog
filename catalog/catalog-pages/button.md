A little clickable thing based on [SF's LDS button](https://www.lightningdesignsystem.com/components/buttons).
Lightning sets the base styles, and then we overwrite whatever we need.


```hint
Use it when you need to click on a thing.
```

```react
span: 3
---
<Button
  label="Click me"
  onClick={() => { console.log('You clicked!') }}
/>
```
