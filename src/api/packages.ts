import { Package } from '@/models/Package'
import { logger } from '@/utils/logger'

/** Decorates the package.json JSON with Package fields */
const decoratePackages = (
  packages: Record<string, string>,
  devDependencies: boolean,
): Record<string, Package> => {
  const decoratedPackages: Record<string, Package> = {}

  Object.keys(packages).forEach((pkgName) => {
    decoratedPackages[pkgName] = {
      name: pkgName,
      version: packages[pkgName],
      devDependency: devDependencies,
      description: '',
    }
  })

  return decoratedPackages
}

export const fetchPackageSize = async (packageId: string): Promise<null | number> => {
  try {
    const res = await fetch(`https://bundlephobia.com/api/size?package=${packageId}`)
    const packageDetails = await res.json()
    return packageDetails.gzip
  } catch (err) {
    logger(err)
    return null
  }
}

export const fetchPackages = async (): Promise<null | { [name: string]: Package }> => {
  try {
    const res = await fetch('/static/json/package.json')
    const json = await res.json()

    logger('packages loaded')

    return {
      ...decoratePackages(json.dependencies, false),
      ...decoratePackages(json.devDependencies, true),
    }
  } catch (err) {
    logger(err.mesage)
    return null
  }
}
