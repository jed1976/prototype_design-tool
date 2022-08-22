export const rgbToHex = (r, g, b) => '#' + [parseInt(r), parseInt(g), parseInt(b)].map(x => {
  const hex = x.toString(16)
  return hex.length === 1 ? '0' + hex : hex
}).join('')