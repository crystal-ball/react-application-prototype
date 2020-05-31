export enum PackagesActionTypes {
  SelectedPackageIdUpdated = 'PACKAGES/SELECTED_PACKAGE_ID_UPDATED',
  PackageSearchFilterUpdated = 'PACKAGES/PACKAGE_SEARCH_FILTER_UPDATED',
}

/** Status of package data fetching */
export enum Status {
  Error = 'Error',
  Idle = 'Idle',
  Loading = 'Loading',
  Sucess = 'Success',
}

/** Detials for a single package */
export type Package = {
  /** Hash of the package's name and version, eg classnames@2.2.6 */
  id: string
  /** Package's description from package.json */
  description?: string
  /** Package's compressed size in bytes */
  gzip: number
  /** Package's name */
  name: string
  /** Package's uncompressed size in bytes */
  size: string
  /** Package's release version */
  version: string
}

/** Normalized map of fetched packages by id */
export type PackagesById = {
  [id: string]: Package
}

/** Packages' Redux state */
export type PackagesState = {
  /** Map of packages with package ids as keys */
  packagesById: PackagesById
  /** Package search filter value */
  packageSearchFilter: string
  /** Id of the currently selected package */
  selectedPackageId: string
  /** Current status of package data fetching */
  status: Status
}
