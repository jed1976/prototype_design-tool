// Listeners
import { beforeunload } from './listeners/beforeunload.js'
import { DOMContentLoaded } from './listeners/DOMContentLoaded.js'

window.addEventListener('beforeunload', beforeunload)
document.addEventListener('DOMContentLoaded', DOMContentLoaded)