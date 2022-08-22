export default {
  from: (value, el) => value.replace('rem', ''),

  to: (value, el) => `${value}rem`
}