
/**
 * @interface PackageInformation
 */
export interface PackageInformation {
    name: string
    version: string
}

/**
 * @param dir
 * @constructor
 */
export function Package(dir: string): PackageInformation
