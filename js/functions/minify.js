export const minify = string => string
  .replace(/\n/g, '')
  .replace(/[\t ]+\</g, '<')
  .replace(/\>[\t ]+\</g, '><')
  .replace(/\>[\t ]+$/g, '>')