
/**
 * @param options
 */
export function defineErrorClass(options?: { code: string, name: string, supererror: Error }): CodedError

/**
 * @class AlreadyInitializedError
 */
export class AlreadyInitializedError extends CodedError {}

/**
 * @class ClassNotExtendableError
 */
export class ClassNotExtendableError extends IllegalStateError {}

/**
 * @class CodedError
 */
export class CodedError extends Error {
    static isInstance(it: any): boolean
    constructor(options?: { cause?: Error, msg?: string, info?: any, _n?: string, _c?: string })
    name: string
    code: string
    CODE: string
    cause?: Error
    info?: any
    subclass(options: {code: string, name: string}): CodedError
}

/**
 * @class IllegalArgumentError
 */
export class IllegalArgumentError extends CodedError {}

/**
 * @class IllegalArgumentTypeError
 */
export class IllegalArgumentTypeError extends IllegalArgumentError {}

/**
 * @class IllegalStateError
 */
export class IllegalStateError extends CodedError {}

/**
 * @class MethodNotImplementedError
 */
export class MethodNotImplementedError extends CodedError {}

/**
 * @class MissingRequiredArgumentError
 */
export class MissingRequiredArgumentError extends IllegalArgumentError {}

/**
 * @class NonuniqueCriteriaError
 */
export class NonuniqueCriteriaError extends CodedError {}

/**
 * @class NotYetInitializedError
 */
export class NotYetInitializedError extends CodedError {}

/**
 * @class ObjectExistsError
 */
export class ObjectExistsError extends CodedError {}

/**
 * @class ObjectNotFoundErrors
 */
export class ObjectNotFoundError extends CodedError {}

/**
 * @class UnknownDiscriminatorError
 */
export class UnknownDiscriminatorError extends CodedError {}

/**
 * @class UnknownEnumError
 */
export class UnknownEnumError extends IllegalArgumentError {}
