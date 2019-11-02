import {IEditorReduxProps, ReduxDataProps} from "./IEditorProps";
import {EducationData} from "../../model/CvData";
import * as React from "react";
import {RootState} from "../../reducers";
import {connect} from "react-redux";
import {ExpansionPanelDetails, TextField} from "@material-ui/core";
import {handleFormChange} from "../../util/FormUtils";
import {saveEducation} from "../../actions/cvDataActions";
import {EditorComponentWrapper} from "./EditorComponentWrapper";

interface EducationEntrySpecificProps {
    itemKey: number;
}

export interface EducationEntryProps extends IEditorReduxProps<EducationData>, EducationEntrySpecificProps { }


class EducationEntryEditorRedux extends React.Component<EducationEntryProps, any> {

    render(): React.ReactNode {
        const {data, dispatch, itemKey} = this.props;
        const key = itemKey;
        return (
            <EditorComponentWrapper
                title={data.title}
                expanded={false}
            >
                <ExpansionPanelDetails style={{display: "flex", flexDirection: "column"}}>
                    <TextField
                        id="title"
                        label="Title"
                        value={data.title}
                        onChange={handleFormChange(data, "title", (v) => dispatch(saveEducation(key, v)))}
                        margin="normal"
                    />
                    <TextField
                        id="instiution"
                        label="Institution"
                        value={data.institution}
                        onChange={handleFormChange(data, "institution", (v) => dispatch(saveEducation(key, v)))}
                        margin="normal"
                    />
                    <TextField
                        id="from"
                        label="From"
                        value={data.from}
                        onChange={handleFormChange(data, "from", (v) => dispatch(saveEducation(key, v)))}
                        margin="normal"
                    />
                    <TextField
                        id="to"
                        label="To"
                        value={data.to}
                        onChange={handleFormChange(data, "to", (v) => dispatch(saveEducation(key, v)))}
                        margin="normal"
                    />
                    <TextField
                        id="grade"
                        label="Final Grade"
                        value={data.finalGrade}
                        onChange={handleFormChange(data, "finalGrade", (v) => dispatch(saveEducation(key, v)))}
                        margin="normal"
                    />
                    <TextField
                        id="eqfLevel"
                        label="EQF Level"
                        value={data.eqfLevel}
                        onChange={handleFormChange(data, "eqfLevel", (v) => dispatch(saveEducation(key, v)))}
                        margin="normal"
                    />
                    <TextField
                        id="shortDescription"
                        label="Short Description"
                        value={data.shortDescription}
                        onChange={handleFormChange(data, "shortDescription", (v) => dispatch(saveEducation(key, v)))}
                        margin="normal"
                        multiline={true}
                        variant="outlined"
                    />
                    <TextField
                        id="shortDescription"
                        label="Long Description"
                        value={data.longDescription}
                        onChange={handleFormChange(data, "longDescription", (v) => dispatch(saveEducation(key, v)))}
                        margin="normal"
                        multiline={true}
                        variant="outlined"
                    />
                </ExpansionPanelDetails>
            </EditorComponentWrapper>
        );
    }
}


function mapStateToProps(state: RootState, ownProps: EducationEntrySpecificProps): ReduxDataProps<EducationData> {
    return {
        data: state.cvData.education.list[ownProps.itemKey]
    };
}

export default connect(mapStateToProps)(EducationEntryEditorRedux);

