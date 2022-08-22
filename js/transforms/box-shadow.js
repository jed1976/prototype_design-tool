import { rgbToHex } from '../functions/rgbToHex.js'

const PARTS_REG = /\s(?![^(]*\))/

export default {
  from: (value, el) => {
    if (!value) return

    let color, x, y, blur, spread

    [color, x, y, blur, spread] = value.split(PARTS_REG)

    const boxShadow = {
      'box-shadow-offset-x': parseFloat(x, 16),
      'box-shadow-offset-y': parseFloat(y, 16),
      'box-shadow-blur': parseFloat(blur, 16),
      'box-shadow-spread': parseFloat(spread, 16),
      'box-shadow-color': rgbToHex(...color.replace('rgb(', '').replace(')', '').split(', ')),
    }

    return boxShadow[el.name]
  },

  to: (value, el) => {
    const form = el.form

    return `${form.elements['box-shadow-offset-x'].value}rem ${form.elements['box-shadow-offset-y'].value}rem ${form.elements['box-shadow-blur'].value}rem ${form.elements['box-shadow-spread'].value}rem ${form.elements['box-shadow-color'].value}`
  }
}