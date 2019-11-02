import {EntryEditorProps, EntryEditorReduxProps, IEditorReduxProps, ReduxDataProps} from "./IEditorProps";
import {WorkExperienceData} from "../../model/CvData";
import * as React from "react";
import {RootState} from "../../reducers";
import {connect} from "react-redux";
import {ExpansionPanelDetails, TextField} from "@material-ui/core";
import {handleFormChange} from "../../util/FormUtils";
import {saveWork} from "../../actions/cvDataActions";
import {EditorComponentWrapper} from "./EditorComponentWrapper";

class WorkEntryEditorRedux extends React.Component<EntryEditorReduxProps<WorkExperienceData>, any> {
    public render(): React.ReactNode {
        const {data, dispatch, itemKey, expanded} = this.props;
        return (
            <EditorComponentWrapper
                title={`${data.role} - ${data.company}`}
                expanded={expanded}
            >
                <ExpansionPanelDetails style={{display: "flex", flexDirection: "column"}}>
                    <TextField
                        id="role"
                        label="Role"
                        value={data.role}
                        onChange={handleFormChange(data, "role", (v) => dispatch(saveWork(itemKey, v)))}
                        margin="normal"
                    />
                    <TextField
                        id="company"
                        label="Company"
                        value={data.company}
                        onChange={handleFormChange(data, "company", (v) => dispatch(saveWork(itemKey, v)))}
                        margin="normal"
                    />
                    <TextField
                        id="from"
                        label="From"
                        value={data.from}
                        onChange={handleFormChange(data, "from", (v) => dispatch(saveWork(itemKey, v)))}
                        margin="normal"
                    />
                    <TextField
                        id="to"
                        label="To"
                        value={data.to}
                        onChange={handleFormChange(data, "to", (v) => dispatch(saveWork(itemKey, v)))}
                        margin="normal"
                    />
                    <TextField
                        id="shortDescription"
                        label="Short Description"
                        value={data.shortDescription}
                        onChange={handleFormChange(data, "shortDescription", (v) => dispatch(saveWork(itemKey, v)))}
                        margin="normal"
                        multiline={true}
                        variant="outlined"
                    />
                    <TextField
                        id="shortDescription"
                        label="Long Description"
                        value={data.longDescription}
                        onChange={handleFormChange(data, "longDescription", (v) => dispatch(saveWork(itemKey, v)))}
                        margin="normal"
                        multiline={true}
                        variant="outlined"
                    />
                </ExpansionPanelDetails>
            </EditorComponentWrapper>
        );
    }
}

function mapStateToProps(state: RootState, ownProps: EntryEditorProps): ReduxDataProps<WorkExperienceData> {
    return {
        data: state.cvData.workExperience.list[ownProps.itemKey]
    };
}

export default connect(mapStateToProps)(WorkEntryEditorRedux);
