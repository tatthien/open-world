import { Data } from '@/types'
import { JSONFilePreset } from 'lowdb/node'

const defaultData: Data = { posts: [] }
export const db = await JSONFilePreset('db.json', defaultData)
