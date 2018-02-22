For displaying two pieces of related information. Use it when you want to show information about an event and a list of dates for the event.

Based on [SF's Scoped Tabs](https://www.lightningdesignsystem.com/components/scoped-tabs).

```html
span: 4
---
<div class="slds-tabs_scoped patman-tabbed-panel">
  <ul class="slds-tabs_scoped__nav slds-grid" role="tablist">
    <li class="slds-tabs_scoped__item slds-col slds-is-active" title="One" role="presentation">
      <a class="slds-tabs_scoped__link slds-align_absolute-center" href="javascript:void(0);" role="tab" tabindex="0" aria-selected="true" aria-controls="tab-scoped-1" id="tab-scoped-1__item">One</a>
    </li>
    <li class="slds-tabs_scoped__item slds-col" title="Two" role="presentation">
      <a class="slds-tabs_scoped__link slds-align_absolute-center" href="javascript:void(0);" role="tab" tabindex="-1" aria-selected="false" aria-controls="tab-scoped-2" id="tab-scoped-2__item">Two</a>
    </li>
  </ul>
  <div id="tab-scoped-1" class="slds-tabs_scoped__content slds-show" role="tabpanel" aria-labelledby="tab-scoped-1__item">Item One Content</div>
  <div id="tab-scoped-2" class="slds-tabs_scoped__content slds-hide" role="tabpanel" aria-labelledby="tab-scoped-2__item">Item Two Content</div>
</div>
```
