/* eslint-disable no-console */
import { DEBUG } from '@/config/environment'

/**
 * Example application wide utility method.
 */
export default function logger(message) {
  if (DEBUG) console.log('Extra logging: ')
  console.info(message)
}
