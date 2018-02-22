For displaying two pieces of related information. Use it when you want to show information about an event and a list of dates for the event.

Based on [SF's Scoped Tabs](https://www.lightningdesignsystem.com/components/scoped-tabs).

```html
span: 4
---
<div class="slds-tabs_scoped patman-tabbed-panel">
  <ul class="slds-tabs_scoped__nav" role="tablist">
    <li class="slds-tabs_scoped__item slds-is-active" title="Item One" role="presentation"><a class="slds-tabs_scoped__link" href="javascript:void(0);" role="tab" tabindex="0" aria-selected="true" aria-controls="tab-scoped-1" id="tab-scoped-1__item">Item One</a></li>
    <li class="slds-tabs_scoped__item" title="Item Two" role="presentation"><a class="slds-tabs_scoped__link" href="javascript:void(0);" role="tab" tabindex="-1" aria-selected="false" aria-controls="tab-scoped-2" id="tab-scoped-2__item">Item Two</a></li>
    <li class="slds-tabs_scoped__item" title="Item Three" role="presentation"><a class="slds-tabs_scoped__link" href="javascript:void(0);" role="tab" tabindex="-1" aria-selected="false" aria-controls="tab-scoped-3" id="tab-scoped-3__item">Item Three</a></li>
  </ul>
  <div id="tab-scoped-1" class="slds-tabs_scoped__content slds-show" role="tabpanel" aria-labelledby="tab-scoped-1__item">Item One Content</div>
  <div id="tab-scoped-2" class="slds-tabs_scoped__content slds-hide" role="tabpanel" aria-labelledby="tab-scoped-2__item">Item Two Content</div>
  <div id="tab-scoped-3" class="slds-tabs_scoped__content slds-hide" role="tabpanel" aria-labelledby="tab-scoped-3__item">Item Three Content</div>
</div>
```
