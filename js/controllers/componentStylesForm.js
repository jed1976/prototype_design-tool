import { requestedComponent } from '../functions/requestedComponent.js'
import { tabList } from '../components/tablist.js'
import { transforms } from '../transforms/transforms.js'

export const componentStylesForm = sheet => {
  let activeCSSRule = 0
  const el = document.getElementById('component-styles-form')
  const fields = Array.from(el.elements).filter(el => 'value' in el)
  const formFieldOutputClass = 'form-field-output'
  const tabLists = Array.from(el.querySelectorAll('.tablist-root')).map(el => tabList(el))

  fields.map(async field => {
    console.log(field.name)

    let value

    const cssProp = field.dataset.cssProp || field.name
    const transform = transforms[field.dataset.transform] || null

    if (cssProp) {
      value = sheet.cssRules[activeCSSRule].style.getPropertyValue(cssProp)

      if (transform) {
        value = await transform.from(value, field)
      }
    }

    field.value = value || field.getAttribute('value')

    if (field.classList.contains(formFieldOutputClass)) {
      field.value = field.previousElementSibling.value
    }
  })

  // Listeners
  el.addEventListener('input', event =>
    dispatchEvent(
      new CustomEvent('component-styles-form.input', { detail: event })
    )
  )
}