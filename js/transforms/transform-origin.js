export default {
  from: (value, el) => {
    const form = el.form
    const [translateX, translateY] = value.split(' ')
    const transform = {
      'transform-origin-x': parseFloat(translateX, 16),
      'transform-origin-y': parseFloat(translateY, 16)
    }

    return transform[el.name]
  },

  to: (value, el) => {
    const form = el.form

    return `${form.elements['transform-origin-x'].value}% ${form.elements['transform-origin-y'].value}%`
  }
}