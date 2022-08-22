import { keypath } from './keypath.js'
import { minify } from './minify.js'

// Template literals
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
//
// **Examples:
//
// ***HTML
// ```<h1>${content.title}</h1>```
//
// ****JS
// ```
// const data = {
//   content: {
//     title: 'Hello, World!'
//   }
// }
//
// const tpl = template(str)
// tpl.set(data)
// tpl.get() // <h1>Hello, World!</h1>
// ```
//
// NOTE: Data sanitization must be done before passing it into
// the template function.
//
export const template = (string, options = {}) => {
  let transform
  const transformParts = []

  const each = data => data.map(item => set(item))

  const get = () => transform

  const set = data => {
    transformParts.push(
      // new Function(`with(this) { return \`${string}\` }`).call(data)
      string.replace(/\${(.*?)}/g, (_, key) => keypath(key, data) || '')
    )

    transform = transformParts.join('')

    if (options.minify) {
      transform = minify(transform)
    }
  }

  return { each, get, set }
}