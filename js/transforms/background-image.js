import { fileToBase64 } from '../functions/fileToBase64.js'

export default {
  from: (value, el) => {
    return
  },

  to: async (value, el) => {
    const file = el.files[0]
    const url = await fileToBase64(file)

    return `url(${url})`
  }
}