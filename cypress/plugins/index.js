import { percyHealthCheck } from '@percy/cypress/task'
import codeCoverageTask from '@cypress/code-coverage/task'

/**
 * This function is called when a project is opened or re-opened (e.g. due to
 * the project's config changing). It can be used to load plugins.
 *
 * 📝 https://on.cypress.io/plugins-guide
 * @param on Used to hook into various events Cypress emits
 * @param config The resolved Cypress config
 */
export default function plugins(on, config) {
  on('task', {
    percyHealthCheck,
  })

  codeCoverageTask(on, config)
  return config
}
