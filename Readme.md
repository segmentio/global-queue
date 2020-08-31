
# global-queue

  Generate a method that will push onto a global queue, commonly used by 3rd-party JavaScript tools.

## Installation

    $ component install segmentio/global-queue

## Example

```js
var push = require('global-queue')('_analytics');

push('key', '506g76b52f52c3f662000190');
push('identify', 'user@example.com');
push('track', 'Loaded a Page');

window._analytics;
// [
//   ['key', '506g76b52f52c3f662000190'],
//   ['identify', 'user@example.com'],
//   ['track', 'Loaded a Page']
// ]
```

## API

### generate(name, [options])
  
  Return a function that will push onto the global queue named `name`, creating it if it doesn't already exist. Options:

    {
      wrap: true
    }

  Setting `wrap` to `false` will not wrap your arguments in an array. Most services want that, but some keep them as objects or plain values.
  
## License

  MIT
