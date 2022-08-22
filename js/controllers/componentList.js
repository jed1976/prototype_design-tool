import { store } from '../functions/store.js'

export const componentList = async () => {
  const el = document.getElementById('component-list')

  const updateList = async () => {
    const components = await store('components')

    Array.from(el.childNodes).map(node => node.remove())

    components.getAll().onsuccess = event => {
      const componentDocuments = event.target.result

      if (componentDocuments.length) {
        const fragment = document.createDocumentFragment()

        componentDocuments.map(componentDocument => {
          const componentLink = document.createElement('a')
          componentLink.classList.add('component-list__item')
          componentLink.href = `/${componentDocument.component}`
          componentLink.role = 'listitem'
          componentLink.textContent = componentDocument.component
          fragment.append(componentLink)
        })

        el.append(fragment)
      }
    }
  }

  // Listeners
  addEventListener('workspace.new-component', await updateList)

  await updateList()
}