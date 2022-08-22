export default {
  from: (value, el) => value.replace('var(--t', '').replace(')', ''),

  to: (value, el) => `var(--t${value})`
}