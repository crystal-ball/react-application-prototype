import { DEBUG } from '@/config/environment'

/**
 * Example application wide utility method.
 */
export default function logger(message) {
  /* eslint-disable no-console */
  if (DEBUG) console.log('Extra logging: ')
  console.info(message)
  /* eslint-enable no-console */
}
