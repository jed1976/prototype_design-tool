export const keypath = (keypath, object) =>
  keypath.split('.').reduce((previous, current) => previous[current], object)