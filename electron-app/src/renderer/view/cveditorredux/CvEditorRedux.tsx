import { connect, DispatchProp } from 'react-redux';
import { CvData } from '../../model/CvData';
import * as React from 'react';
import { IEditorProps, IEditorReduxProps } from './IEditorProps';
import { RootState } from '../../reducers';
import { ReactNode } from 'react';
import PersonalDataEditorRedux from './PersonalDataEditorRedux';
import BioDataEditorRedux from './BioDataEditorRedux';

class CvEditorRedux extends React.Component<IEditorProps, any> {

    render(): ReactNode {
        return (
            <div style={{display: "flex", flexDirection: "column", flex: 1}}>
                <PersonalDataEditorRedux
                    expanded={false}
                />
                <BioDataEditorRedux expanded={false} />
            </div>

        );
    }
}

function mapStateToProps(state: RootState, ownProps: IEditorProps): IEditorProps {
    return ownProps;
}

export default connect<{}, {}, IEditorProps, RootState>(mapStateToProps)(CvEditorRedux);
