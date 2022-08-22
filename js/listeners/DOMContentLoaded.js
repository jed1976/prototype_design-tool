import { componentList } from '../controllers/componentList.js'
import { requestedComponent } from '../functions/requestedComponent.js'
import { slugify } from '../functions/slugify.js'
import { workspace } from '../controllers/workspace.js'


export const DOMContentLoaded = async event => {
  const urlParams = new URLSearchParams(document.location.search)

  // Routing
  const action = urlParams.get('action')

  switch (action) {
    case 'new-component':
      const componentName = slugify(urlParams.get('component') || '')
      if (componentName) {
        location.href = componentName
      }
    break

    default:
      componentList()
      workspace()
    break
  }
}