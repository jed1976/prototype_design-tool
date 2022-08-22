import { serialize } from './serialize.js'
import { slugify } from '../functions/slugify.js'
import { template } from './template.js'

export const createComponentDocument = (component, tagName = 'div') => {
  component = slugify(component)

  // Get component template
  const componentTemplateElement = document.getElementById('component-template')

  // Clone and get template content
  const componentTemplateClone = componentTemplateElement.content.cloneNode(true)
  const componentTemplateContent = new XMLSerializer().serializeToString(componentTemplateClone)
  const componentTemplate = template(componentTemplateContent, { minify: true })

  // Create root node
  let element = document.createElement(tagName)
  element.classList.add(component)
  element.textContent = component

  // Bind data to component template
  componentTemplate.set({ component, element: serialize(element) })

  return {
    component,
    template: componentTemplate.get()
  }
}