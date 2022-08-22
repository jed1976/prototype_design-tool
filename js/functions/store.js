import { db } from './db.js'
import { idbstore } from './idbstore.js'

const DB_NAME = 'untitled'

export const store = async (name, mode) => idbstore(await db(DB_NAME), name, mode)