export default {
  from: (value, el) => {
    const form = el.form
    const [scaleX, skewY, skewX, scaleY, translateX, translateY] = value.replace('matrix(', '').replace(')', '').split(', ')
    const transform = {
      'transform-scale-x': parseFloat(scaleX, 16),
      'transform-scale-y': parseFloat(scaleY, 16),
      'transform-skew-x': parseFloat(skewX, 16),
      'transform-skew-y': parseFloat(skewY, 16),
      'transform-translate-x': parseFloat(translateX, 16),
      'transform-translate-y': parseFloat(translateY, 16)
    }

    return transform[el.name]
  },

  to: (value, el) => {
    const form = el.form

    return `matrix(${form.elements['transform-scale-x'].value}, ${form.elements['transform-skew-y'].value}, ${form.elements['transform-skew-x'].value}, ${form.elements['transform-scale-y'].value}, ${form.elements['transform-translate-x'].value}, ${form.elements['transform-translate-y'].value})`
  }
}