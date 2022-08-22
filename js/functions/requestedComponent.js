import { slugify } from './slugify.js'

export const requestedComponent = slugify(location.pathname.replace('/', ''))