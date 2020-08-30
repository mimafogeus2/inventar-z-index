# Inventar Z-Index

An [Inventar](https://www.npmjs.com/package/inventar) transformer to take care of all of your z-index needs.

## Installation

```bash
yarn add inventar-z-index
```

## Usage

Add it to your inventar config:

```javascript
import makeInventar from 'inventar';
import zIndex from 'inventar-z-index'

const { jsInventar, cssInventar, inject } = makeInventar({
  ...
  zIndex: { value: 100, transformers: [zIndex(['header', 'modal', 'toaster'])] }
})
```



Inventar Z-Index takes a single argument - an array containing the names of your different layers. It will output variables whose names are the layer names, prefixed by the original variable names, and whose values are multiplies of the initial values.

The result of the example above will resolve to:

```javascript
{
  zIndexHeader: 100,
  zIndexModal: 200,
  zIndexToaster: 300,
}
```



By using these variables consistently, you'll no longer have to guess numbers. When you add a new layer, other layers' values change accordingly and you don't have to do anything else.



## Future Plans

- Set a different step other than multiplying the initial value (So you could have 110, 120, 130... as z-indices).
- Indices groups - to allow elements that are contained in other elements to stay above/below their parent, and not conflict with others (for example, a top bar with an X for a modal).