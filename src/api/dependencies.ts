import { Dependency, DependencyType } from '@/entities/dependency'
import { logger } from '@/utils/logger'

/** Decorates the package.json JSON with Package fields */
const decorateDependencies = (
  dependencies: Record<string, string>,
  { type }: { type: DependencyType },
): Record<string, Dependency> => {
  const decoratedDependencies: Record<string, Dependency> = {}

  Object.keys(dependencies).forEach((dep) => {
    decoratedDependencies[dep] = {
      name: dep,
      type,
      version: dependencies[dep],
    }
  })

  return decoratedDependencies
}

export const fetchDependencySize = async (id: string): Promise<null | number> => {
  try {
    const res = await fetch(`https://bundlephobia.com/api/size?package=${id}`)
    const json = await res.json()
    return json.gzip
  } catch (err) {
    logger(err)
    return null
  }
}

export const fetchDependencies = async (): Promise<null | Record<string, Dependency>> => {
  try {
    const res = await fetch('/static/json/package.json')
    const json = await res.json()

    logger('dependencies loaded')

    return {
      ...decorateDependencies(json.dependencies, { type: 'dependencies' }),
      ...decorateDependencies(json.devDependencies, { type: 'devDependencies' }),
    }
  } catch (err) {
    logger('Failed to fetch dependencies')
    logger(err)
    logger(err.mesage)
    return null
  }
}
