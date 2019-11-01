export default class InvalidArgumentError extends Error {
    constructor(message: string) {
        super(message);
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, InvalidArgumentError.prototype);
    }
}
