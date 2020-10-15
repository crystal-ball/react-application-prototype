import { Package } from '@/models/Package'

/** Normalized map of fetched packages by id */
export type PackagesById = Record<string, Package>
