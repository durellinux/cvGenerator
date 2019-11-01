
export function handleFormChange<T>(currentState: T, name: keyof T, updateState: (newState: T) => void): (event: React.ChangeEvent<HTMLInputElement>) => any {
    return (event: React.ChangeEvent<HTMLInputElement>): any => {
        updateState({ ...currentState, [name]: event.target.value });
    }
};
