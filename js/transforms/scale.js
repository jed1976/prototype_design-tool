export default {
  from: (value, el) => {
    return value.replace('var(--s', '').replace(')', '')
  },

  to: (value, el) => {
    value = value.replace('var(--s', '').replace(')', '')
    return `var(--s${value})`
  }
}