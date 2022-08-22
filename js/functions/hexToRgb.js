export const hexToRgb = (hex) => {
  hex = hex.replace(/^#/, '')
  let alpha = 255

  if (hex.length === 8) {
    alpha = parseInt(hex.slice(6, 8), 16)
    hex = hex.substring(0, 6)
  }

  if (hex.length === 4) {
    alpha = parseInt(hex.slice(3, 4).repeat(2), 16)
    hex = hex.substring(0, 3)
  }

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }

  const num = parseInt(hex, 16)
  const red = num >> 16
  const green = (num >> 8) & 255
  const blue = num & 255

  return [red, green, blue, alpha]
}