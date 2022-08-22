import { idb } from './idb.js'

const VERSION = 1

export const db = async name => await idb(name, VERSION, event => {
  const result = event.target.result
  result.createObjectStore('components', { keyPath: 'component' })
})