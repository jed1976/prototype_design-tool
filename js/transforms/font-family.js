export default {
  from: (value, el) => value.replace(/\"/g, "'"),

  to: (value, el) => value
}