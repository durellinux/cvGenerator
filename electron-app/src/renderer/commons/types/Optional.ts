import ArgUtils from '../argutils/ArgUtils';

type OptionalType<T> = T | null | undefined;

export default class Optional<T> {
    public static empty<T>(): Optional<T> {
        return new Optional<T>(null);
    }

    public static ofMaybe<T>(value: OptionalType<T>): Optional<T> {
        if (value === null || value === undefined) {
            return Optional.empty();
        }

        return Optional.of(value);
    }

    public static of<T>(value: T): Optional<T> {
        ArgUtils.assertNotNull(value);
        return new Optional<T>(value);
    }

    private value: OptionalType<T>;

    private constructor(value: OptionalType<T>) {
        this.value = value;
    }

    public isEmpty(): boolean {
        return this.value === null || this.value === undefined;
    }

    // TODO: Use custom error
    public get(): T {
        return this.orElseThrow(new Error('Optional is empty'));
    }

    public orElse(value: T): T {
        let response: T = value;
        if (!this.isEmpty()) {
            response = this.get();
        }

        return response;
    }

    public orElseThrow(error: Error): T {
        if (this.isEmpty()) {
            throw error;
        } else {
            return this.value as T;
        }
    }
}
