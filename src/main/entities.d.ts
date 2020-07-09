import moment from 'moment-timezone';

/**
 * Offers no additional trait functionality
 * @interface Persistable
 * @deprecated
 */
// tslint:disable-next-line:no-empty-interface
export class Persistable {}

/**
 * @interface Identifiable
 */
export class Identifiable {
    id: string
    withId(value:string): Identifiable
    identifies(that: Identifiable): boolean
}

/**
 * @class Period
 */
export class Period extends Persistable {
    begin: any
    end: any
    readonly length: any
    readonly type: string
    static beginningAtWithMinutes(begin: any, minutes: any): Period
    static compare(a: any, b: any): number
    static equal(a: any, b: any): boolean
    static contain(container: any, candidate: any | moment.Moment): boolean
    static overlap(a: any, b: any): boolean
    constructor(begin?: any, end?: any)
    equals(that: any): boolean
    clone(): Period
    withBegin(value: any): Period
    withEnd(value: any): Period
    containsPeriod(that: any): boolean
    containsMoment(m: moment.Moment, inclusivity: string): boolean
    overlaps(period: Period): boolean
    compareTo(that: Period): number
    toString(): string
}

/**
 * @class DatePeriod
 */
export class DatePeriod extends Period {
    static beginningAtWithDays(begin: any, days: any): DatePeriod
    constructor(begin?: any, end?: any)
}

/**
 * @class Recurrence
 */
export class Recurrence {
    constructor()
    minutes: any
    withMinutes(value: any): Recurrence
    hours: any
    withHours(value: any): Recurrence
    daysOfMonth: any
    withDaysOfMonth(value: any): Recurrence
    daysOfWeek: any
    withDaysOfWeek(value: any): Recurrence
    dayOfWeekCounts: any
    withDayOfWeekCounts(value: any): Recurrence
    months: any
    withMonths(value: any): Recurrence
}
