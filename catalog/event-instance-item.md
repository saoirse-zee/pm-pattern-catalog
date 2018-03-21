> Presents a single instance of an event

This is meant to be used within a list of event instances.

```react
span: 2
---
<EventInstanceItem
  date="Jan 1 7:30pm"
  isAvailable={true}
/>
```


The user sees a message instead of a button when the event instance is not available.

```react
span: 2
---
<EventInstanceItem
  date="Jan 1 7:30pm"
  isAvailable={false}
/>
```
