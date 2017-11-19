# Enzyme UMD

A utility to build a [UMD (Universal Module Definition)](https://github.com/umdjs/umd) for [Enzyme](https://github.com/airbnb/enzyme). This can
be used for any testing project dependent on Enzyme that uses AMD, Global/Window, or ES6 module loading, instead of Node's Common JS module
loading.

## To Build

Run:

```
npm run build
```

This will generate a minified and non-minified `enzyme-react.js` UMD module file in the `build` directory.

## To Use

### AMD i.e. RequireJS

As long as `enzyme-react.js` is in the require JS path, you can require it just as with other dependencies:

```
define(['enzyme-react'], function (enzymeReact) {
  const { react, enzyme } = enzymeReact;
});
```

### Window/Global

```
window['enzyme-react'].react
window['enzyme-react'].enzyme
```

## To Run Unit tests

Run:

```
npm test
```

## To Run Clean, Build and Unit tests

Run:

```
npm run all
```

## Pitfalls

- Avoid loading multiple versions of React. Use the version packaged with this module.
- Ensure proper version of Enzyme/React. This project is currently set up to build Enzyme 3.X and React 16.X.
