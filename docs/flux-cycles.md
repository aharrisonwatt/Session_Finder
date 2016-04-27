# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## Happening Cycles

### Happenings API Request Actions

* `fetchAllHappenings`
  0. invoked from `HappeningIndex` `didMount`/`willReceiveProps`
  0. `GET /api/Happenings` is called.
  0. `receiveAllHappenings` is set as the callback.

* `createHappening`
  0. invoked from 'host session' button `onClick`
  0. `POST /api/happenings` is called.
  0. `receiveSingleHappening` is set as the callback.

* `fetchSingleHappening`
  0. invoked from `HappeningIndexItem` `didMount`/`willReceiveProps`
  0. `GET /api/happening/:id` is called.
  0. `receiveSingleHappening` is set as the callback.

* `updateHappening`
  0. invoked from `HappeningForm` `onSubmit`
  0. `POST /api/happenings` is called.
  0. `receiveSingleHappening` is set as the callback.

* `destroyHappening`
  0. invoked from 'delete session' button `onClick`
  0. `DELETE /api/happening/:id` is called.
  0. `removeHappening` is set as the callback.

### Happening API Response Actions

* `receiveAllHappenings`
  0. invoked from an API callback.
  0. `Happening` store updates `_happenings` and emits change.

* `receiveSingleHappening`
  0. invoked from an API callback.
  0. `Happening` store updates `_happenings[id]` and emits change.

* `removeHappening`
  0. invoked from an API callback.
  0. `Happening` store removes `_happening[id]` and emits change.

### Store Listeners

* `HappeningIndex` component listens to `Happening` store.
* `HappeningIndexItem` component listens to `Happening` store.
