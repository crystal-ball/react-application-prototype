import { nanoid } from 'nanoid'
import { expose } from 'threads/worker'

expose(async function generateRandomID(seed) {
  console.log('WORKER SEED: ', seed)
  return nanoid(12)
})
