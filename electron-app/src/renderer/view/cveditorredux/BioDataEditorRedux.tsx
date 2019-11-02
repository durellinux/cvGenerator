import { IEditorProps, IEditorReduxProps, ReduxDataProps } from './IEditorProps';
import * as React from 'react';
import { RootState } from '../../reducers';
import { connect } from 'react-redux';
import {ExpansionPanelDetails, TextField} from "@material-ui/core";
import {saveBio} from "../../actions/cvDataActions";
import {EditorComponentWrapper} from "./EditorComponentWrapper";

class BioDataEditorRedux extends React.Component<IEditorReduxProps<string>, any> {

    render(): React.ReactNode {
        const {data, dispatch} = this.props;
        return (
            <EditorComponentWrapper
                title="About Me"
                expanded={false}
            >
                <ExpansionPanelDetails style={{display: "flex", flexDirection: "column"}}>
                    <TextField
                        id="shortDescription"
                        label="Content"
                        value={data}
                        onChange={(event) => dispatch(saveBio(event.target.value))}
                        margin="normal"
                        multiline={true}
                        variant="outlined"
                    />
                </ExpansionPanelDetails>
            </EditorComponentWrapper>
        );
    }
}


function mapStateToProps(state: RootState, ownProps: IEditorProps): ReduxDataProps<string> {
    return {
        data: state.cvData.bio.value
    };
}

export default connect(mapStateToProps)(BioDataEditorRedux);
