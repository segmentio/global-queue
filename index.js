
/**
 * Expose `generate`.
 */

module.exports = generate;


/**
 * Generate a global queue pushing method with `name`.
 *
 * @param {String} name
 * @return {Function}
 */

function generate (name) {
  return function (args) {
    args = [].slice.call(arguments);
    window[name] || (window[name] = []);
    window[name].push(args);
  };
}