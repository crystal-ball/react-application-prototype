/**
 * Example application wide utility method.
 */
export default function logger(message) {
  /* eslint-disable no-console */
  if (process.env.DEBUG) console.log('Extra logging: ')
  console.info(message)
  /* eslint-enable no-console */
}
