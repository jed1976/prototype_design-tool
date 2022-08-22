import { componentWithDisplayBox } from '../functions/componentWithDisplayBox.js'
import { removeChildNodes } from '../functions/removeChildNodes.js'

export const canvas = async (componentDocument) => {
  const el = document.getElementById('canvas')

  removeChildNodes(el)
  el.append(componentWithDisplayBox(componentDocument))
  el.scrollIntoView()
}