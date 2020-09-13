/* eslint-disable no-console */
import { DEBUG } from '@/config/environment'

/**
 * Example application wide utility method.
 */
export const logger = (message: string): void => {
  if (DEBUG) console.log('Extra logging: ')
  console.info(message)
}
