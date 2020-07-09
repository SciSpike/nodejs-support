import { UnknownEnumError } from './errors';

/**
 * @interface EnumValue
 */
export interface EnumValue { name: string, ordinal: number}

/**
 * @interface EnumErrorOptions
 */
export interface EnumErrorOptions {
    code?: string
    msg?: string
    info?: string
}

/**
 * @class Enumeration
 */
export interface Enumeration<T extends EnumValue> {
    // tslint:disable-next-line:no-misused-new
    new(name?: string, values?: string[], error?: EnumErrorOptions): Enumeration<T>
    isEnumerationInstance(it:any): boolean
    isEnumerationClass(it: any): boolean
    isInstance(it: any): boolean
    isClass(it: any): boolean
    of(it: any): T
    $ERROR$: UnknownEnumError
    enumValues: T[]
    [key:string]: any
}

/**
 * @const DateOfWeek
 */
export const DateOfWeek: {
    LAST: EnumValue
    SUNDAY: EnumValue
    MONDAY: EnumValue
    TUESDAY: EnumValue
    WEDNESDAY: EnumValue
    THURSDAY: EnumValue
    FRIDAY: EnumValue
    SATURDAY: EnumValue
    next(count?:number): EnumValue
    prev(count?:number): EnumValue
} & Enumeration<EnumValue>

/**
 * @const ResponseStatus
 */
export const ResponseStatus: {
    ERROR: EnumValue
    SUCCESS: EnumValue
    PARTIAL: EnumValue
} & Enumeration<EnumValue>

/**
 * @const TimeUnit
 */
export const TimeUnit: {
    YEAR: EnumValue & { key: string, ms: number }
    QUARTER: EnumValue & { key: string, ms: number }
    MONTH: EnumValue & { key: string, ms: number }
    WEEKS: EnumValue & { key: string, ms: number }
    DAY: EnumValue & { key: string, ms: number }
    HOUR: EnumValue & { key: string, ms: number }
    MINUTE: EnumValue & { key: string, ms: number }
    SECOND: EnumValue & { key: string, ms: number }
    MILLISECOND: EnumValue & { key: string, ms: number }
} & Enumeration<EnumValue & { key: string, ms: number }>
