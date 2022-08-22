import { cloneComponentDisplayBox } from '../functions/cloneComponentDisplayBox.js'

export const componentWithDisplayBox = componentDocument => {
  const box = cloneComponentDisplayBox()
  box.append(document.createRange().createContextualFragment(componentDocument.template))
  return box
}