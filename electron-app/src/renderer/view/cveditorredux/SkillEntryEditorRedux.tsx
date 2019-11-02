import {EntryEditorProps, EntryEditorReduxProps, ReduxDataProps} from "./IEditorProps";
import {SkillData} from "../../model/CvData";
import * as React from "react";
import {RootState} from "../../reducers";
import {connect} from "react-redux";
import {ExpansionPanelDetails, TextField} from "@material-ui/core";
import {handleFormChange} from "../../util/FormUtils";
import {EditorComponentWrapper} from "./EditorComponentWrapper";
import {saveSkill} from "../../actions/cvDataActions";

class SkillEntryEditorRedux extends React.Component<EntryEditorReduxProps<SkillData>, any> {
    public render(): React.ReactNode {
        const {data, dispatch, expanded, itemKey} = this.props;
        return (
            <EditorComponentWrapper
                title={`${data.name} (${data.level}/100)`}
                expanded={expanded}
            >
                <ExpansionPanelDetails style={{display: "flex", flexDirection: "column"}}>
                    <TextField
                        id="name"
                        label="Name"
                        value={data.name}
                        onChange={handleFormChange(data, "name", (v) => dispatch(saveSkill(itemKey, v)))}
                        margin="normal"
                    />
                    <TextField
                        id="level"
                        label="Level"
                        value={data.level}
                        onChange={handleFormChange(data, "level", (v) => dispatch(saveSkill(itemKey, v)))}
                        margin="normal"
                    />
                </ExpansionPanelDetails>
            </EditorComponentWrapper>
        );
    }
}

function mapStateToProps(state: RootState, ownProps: EntryEditorProps): ReduxDataProps<SkillData> {
    return {
        data: state.cvData.skills.list[ownProps.itemKey],
    };
}

export default connect(mapStateToProps)(SkillEntryEditorRedux);
