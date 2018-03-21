> Presents a list of event instances

This component uses the EventInstanceItem component.

```react
span: 2.5
---
<EventInstanceList
  instanceList={[
    {
      id: 1,
      date: "Jan 1 7:30pm",
      isAvailable: true
    },
    {
      id: 2,
      date: "Jan 2 2:30pm",
      isAvailable: false
    },
    {
      id: 3,
      date: "Jan 2 7:30pm",
      isAvailable: true
    },
    {
      id: 4,
      date: "Jan 3 7:30pm",
      isAvailable: true
    },
  ]}
/>
```
