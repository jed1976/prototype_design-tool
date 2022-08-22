export const idb = async (name, version = 1, upgrade) =>
  await new Promise((resolve, reject) => {
    const request = indexedDB.open(name, version)
    request.onerror = reject
    request.onsuccess = event => resolve(event.target.result)
    request.onupgradeneeded = upgrade || null
    request.onblocked = reject
  })