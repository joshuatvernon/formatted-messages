# Formatted Messages

[![npm version](https://badge.fury.io/js/formatted-messages.svg)](https://badge.fury.io/js/formatted-messages) [![Build Status](https://travis-ci.com/joshuatvernon/formatted-messages.svg?branch=master)](https://travis-ci.com/joshuatvernon/formatted-messages) [![vulnerabilities](https://snyk.io/test/github/joshuatvernon/formatted-messages/badge.svg)](https://snyk.io/test/github/joshuatvernon/formatted-messages)

`formatted-messages` is just a smaller (non intl) copy of the `react-intl` API made for Node packages. Reference [chalk](https://www.npmjs.com/package/chalk) to see what colours `formatted-messages` supports.

## API

### `formatMessage`

Formats and colourises a `message`.

##### Arguments
1. `unformattedMessage`: an object with the following properties
    1. `message`: a string message to be formatted with tags to be replaced
    2. `defaultOptions`: an object with properties to be replaced in the message if options are not passed. These will be overridden by properties in `option` if passed.
2. `options`: an object with variables to be replaced
    1. `?separator`: an optional property that will define how array type variables will be separated

##### Example

```js
let message;

// message = 'Hello, world!'
message = formatMessage({
    message: 'Hello, world!',
});

// message = 'Hello, Nick!'
message = formatMessage({
    message: 'Hello, {name}!',
    defaultOptions: {
        name: 'Nick',
    },
});

// message = 'Hello, Alex!'
message = formatMessage({
    message: 'Hello, {name}!',
    defaultOptions: {
        name: 'Nick',
    },
}, {
    name: 'Alex',
});

// message = 'Hello, Alex!' <= 'Alex' will be coloured cyan :)
message = formatMessage({
    message: 'Hello, <cyan>{name}<cyan>!',
    defaultOptions: {
        name: 'Nick',
    },
}, {
    name: 'Alex',
});

// message = 'Hello, Alex!' <= 'Alex' will be coloured red :)
message = formatMessage({
    message: 'Hello, <error>{name}<error>!',
    defaultOptions: {
        name: 'Nick',
    },
}, {
    name: 'Alex',
});

// message = 'Hello, Nick, Alex, Ash!' <= 'Nick, Alex, Ash' will be coloured green :)
message = formatMessage({
    message: 'Hello, <green>[names]<green>!',
}, {
    names: ['Nick', 'Alex', 'Ash'],
});

// message = 'Hello, Nick and Alex and Ash!' <= 'Nick and Alex and Ash' will be coloured green :)
message = formatMessage({
    message: 'Hello, <green>[names]<green>!',
}, {
    names: ['Nick', 'Alex', 'Ash'],
    separator: ' and '
});
```

### `printMessage`

Prints a `message` to the console.

##### Arguments
1. `message`: a string message to print to the console.

##### Example

```js
const message = formatMessage({
    message: 'Hello world',
});

// prints message to console
printMessage(message);
```
