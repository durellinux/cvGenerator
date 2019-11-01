import { isEmpty } from 'lodash';

import InvalidArgumentError from './exception/InvalidArgumentError';

export default class ArgUtils {
    public static assertNotNull(object: any) {
        if (object === undefined || object === null) {
            throw new InvalidArgumentError("Value can't be null");
        }
    }

    public static assertNotEmpty(object: object | any[]) {
        // TODO: provide the empty field in the exeption message
        if (isEmpty(object)) {
            throw new InvalidArgumentError("Value can't be empty");
        }
    }
}
