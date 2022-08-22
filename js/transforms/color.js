import { rgbToHex } from '../functions/rgbToHex.js'

export default {
  from: (value, el) => {
    if (!value || value == '') return '#000000'

    value = value.replace('rgb(', '').replace(')', '').split(', ')
    value = rgbToHex(...value)
    return value
  },

  to: (value, el) => value
}