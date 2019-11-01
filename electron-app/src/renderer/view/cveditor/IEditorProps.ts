export interface IEditorProps<T> {
    data: T;
    update: (cvData: T) => void;
    expanded: boolean;
}
