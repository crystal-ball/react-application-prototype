import { Package } from '@/models/Package'
import { logger } from '@/utils/logger'

const fetchPackages = async (): Promise<null | { [name: string]: Package }> => {
  try {
    const res = await fetch('/static/json/package.json')
    const json = await res.json()

    logger('packages loaded')

    const { dependencies, devDependencies } = json
    const packages = {}

    Object.keys(json.dependencies).forEach((pkgName) => {
      packages[pkgName] = {
        name: pkgName,
        version: dependencies[pkgName],
        devDependencies: false,
      }
    })

    Object.keys(json.devDependencies).forEach((pkgName) => {
      packages[pkgName] = {
        name: pkgName,
        version: devDependencies[pkgName],
        devDependencies: true,
      }
    })

    return packages
  } catch (err) {
    logger(err.mesage)
    return null
  }
}

export const packagesAPI = {
  fetchPackages,
}
