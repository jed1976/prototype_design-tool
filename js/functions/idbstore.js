export const idbstore = (db, store, mode = 'readonly') =>
  db.transaction(store, mode).objectStore(store)