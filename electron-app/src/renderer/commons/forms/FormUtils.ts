import { Dispatch, SetStateAction } from 'react';

export function handleFormChange<T>(currentState: T, name: keyof T, setValues: Dispatch<SetStateAction<T>>): (event: React.ChangeEvent<HTMLInputElement>) => any {
    return (event: React.ChangeEvent<HTMLInputElement>): any => {
        setValues({ ...currentState, [name]: event.target.value });
    }
};
