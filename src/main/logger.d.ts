import Logger from 'bunyan';

/**
 * @interface BunyanerOptions
 */
export interface BunyanerOptions {
    wrapperKey: string,
    forceWrap: boolean
}

/**
 * @returns Logger
 * @param name
 * @param bunyanOptions
 * @param bunyanerOptions
 */
export function log(name: string, bunyanOptions: Logger.LoggerOptions, bunyanerOptions: BunyanerOptions): Logger
