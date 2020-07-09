/**
 * @class ClsHookedContext
 */
declare class Context {
    constructor(name: string)
    name: string
    set(name: string, value: any): void
    get(name: string): any
    run(fn: () => any, values?: Record<string, any>): any
}

/**
 * @param { string } name
 * @returns ClsHookedContext
 */
export function ClsHookedContext(name?:string): Context
export function ZoneJsContext(name?:string): Context
