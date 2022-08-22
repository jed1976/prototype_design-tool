import { DOMContentLoaded } from './DOMContentLoaded.js'

export const beforeunload = () => {
  document.removeEventListener('DOMContentLoaded', DOMContentLoaded)
  window.removeEventListener('beforeunload', beforeunload)
}