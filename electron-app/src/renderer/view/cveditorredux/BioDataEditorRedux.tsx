import { IEditorProps, IEditorReduxProps, ReduxDataProps } from './IEditorProps';
import * as React from 'react';
import { ReactNode } from 'react';
import { RootState } from '../../reducers';
import { connect } from 'react-redux';

class BioDataEditorRedux extends React.Component<IEditorReduxProps<string>, any> {

    render(): ReactNode {
        return undefined;
    }
}


function mapStateToProps(state: RootState, ownProps: IEditorProps): ReduxDataProps<string> {
    return {
        data: state.cvData.bio.value
    };
}

export default connect(mapStateToProps)(BioDataEditorRedux);
