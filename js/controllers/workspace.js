import { canvas } from './canvas.js'
import { componentStylesForm } from './componentStylesForm.js'
import { createComponentDocument } from '../functions/createComponentDocument.js'
import { requestedComponent } from '../functions/requestedComponent.js'
import { store } from '../functions/store.js'
import { transforms } from '../transforms/transforms.js'

export const workspace = async () => {
  let activeCSSRule = 0
  let components = await store('components', 'readwrite')

  const el = document.getElementById('workspace')
  const component = () => el.querySelector('.component')
  const script = () => el.querySelector('script')
  const sheet = () => el.querySelector('style')

  document.title = 'Untitled' + (requestedComponent ? ` — ${requestedComponent}` : '')
  document.body.dataset.disabled = true

  if (requestedComponent) {
    components.get(requestedComponent).onsuccess = async event => {
      let componentDocument = event.target.result

      if (!componentDocument) {
        componentDocument = createComponentDocument(requestedComponent)
        components = await store('components', 'readwrite')
        components.put(componentDocument)

        dispatchEvent(new CustomEvent('workspace.new-component', { detail: componentDocument }))
      }

      // Listeners
      addEventListener('component-styles-form.input', async event => {
        components = await store('components', 'readwrite')

        const field = event.detail.target
        const cssProp = field.dataset.cssProp || field.name
        const transform = transforms[field.dataset.transform] || null

        let value = field.value

        if (cssProp) {
          if (transform) {
            value = await transform.to(value, field)
          }

          sheet().sheet.cssRules[activeCSSRule].style.setProperty(cssProp, value)
          sheet().textContent = sheet().sheet.cssRules[activeCSSRule].cssText
        }

        componentDocument.template = component().innerHTML

        if (field.nextElementSibling && field.nextElementSibling.classList.contains('form-field-output')) {
          field.nextElementSibling.value = field.value
        }

        components = await store('components', 'readwrite')
        components.put(componentDocument)
      })

      canvas(componentDocument)
      componentStylesForm(sheet().sheet)

      delete document.body.dataset.disabled
    }
  }
}