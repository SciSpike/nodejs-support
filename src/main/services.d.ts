/**
 * @interface FormattedError
 */
export interface FormattedError {
    name: string,
    message: string
    code?: string
    info?: any
    cause?: FormattedError
    stack?: any
}

/**
 * @class ServiceSupport
 */
export class ServiceSupport {
    static respondWithDtoFrom(fn: () => Record<string, any>, includeStackTrace?: boolean): Promise<Record<string, any>>
    static formatError(e: Error, includeStacktrace?: boolean): FormattedError
}

/**
 * @param options
 */
export function returnsServiceResponse(options?: { includeStacktrace?: boolean }):
    (thisJoinPoint: {proceed: any}) => Promise<Record<string, any>>
