import { DispatchProp } from 'react-redux';
import { Dispatch } from 'redux';

export interface IDispatchProps<S> {
    dispatch: Dispatch<S>
}

export interface IEditorProps {
    expanded: boolean;
}

export interface ReduxDataProps<T> {
    data: T
}

export interface IEditorReduxProps<T> extends IDispatchProps<any>, IEditorProps, ReduxDataProps<T> {

}
