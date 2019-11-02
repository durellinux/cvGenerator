import { DispatchProp } from 'react-redux';
import { Dispatch } from 'redux';

export interface IDispatchProps<S> {
    dispatch: Dispatch<S>
}

export interface IEditorProps {
    expanded: boolean;
}

export interface EditorWrapperProps extends IEditorProps {
    title : string;
}

export interface ReduxDataProps<T> {
    data: T
}

export interface IReduxProps<T> extends ReduxDataProps<T>, IDispatchProps<any> {}

export interface IEditorReduxProps<T> extends IDispatchProps<any>, IEditorProps, ReduxDataProps<T> {}

export interface EntryEditorProps {
    itemKey: number;
}

export interface EntryEditorReduxProps<T> extends IEditorReduxProps<T>, EntryEditorProps{
}
