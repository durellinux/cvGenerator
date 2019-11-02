import {EntryEditorProps, EntryEditorReduxProps, IEditorReduxProps, ReduxDataProps} from "./IEditorProps";
import {SecondLanguageData} from "../../model/CvData";
import * as React from "react";
import {RootState} from "../../reducers";
import {connect} from "react-redux";
import {ExpansionPanelDetails, TextField} from "@material-ui/core";
import {handleFormChange} from "../../util/FormUtils";
import {saveSecondLanguage} from "../../actions/cvDataActions";
import {EditorComponentWrapper} from "./EditorComponentWrapper";

class SecondLanguageEntryEditorRedux extends React.Component<EntryEditorReduxProps<SecondLanguageData>, any> {
    public render(): React.ReactNode {
        const {data, dispatch, itemKey, expanded} = this.props;
        return (
            <EditorComponentWrapper
                title={data.language}
                expanded={expanded}
            >
                <ExpansionPanelDetails style={{display: "flex", flexDirection: "column"}}>
                    <TextField
                        id="language"
                        label="Language"
                        value={data.language}
                        onChange={handleFormChange(data, "language", (v) => dispatch(saveSecondLanguage(itemKey, v)))}
                        margin="normal"
                    />
                    <TextField
                        id="reading"
                        label="Reading"
                        value={data.reading}
                        onChange={handleFormChange(data, "reading", (v) => dispatch(saveSecondLanguage(itemKey, v)))}
                        margin="normal"
                    />
                    <TextField
                        id="writing"
                        label="Writing"
                        value={data.writing}
                        onChange={handleFormChange(data, "writing", (v) => dispatch(saveSecondLanguage(itemKey, v)))}
                        margin="normal"
                    />
                    <TextField
                        id="speaking-production"
                        label="Speaking Production"
                        value={data.spokenProduction}
                        onChange={handleFormChange(data, "spokenProduction", (v) => dispatch(saveSecondLanguage(itemKey, v)))}
                        margin="normal"
                    />
                    <TextField
                        id="speaking-interaction"
                        label="Speaking Interaction"
                        value={data.spokenInteraction}
                        onChange={handleFormChange(data, "spokenInteraction", (v) => dispatch(saveSecondLanguage(itemKey, v)))}
                        margin="normal"
                    />
                    <TextField
                        id="certifications"
                        label="Certifications"
                        value={data.certification}
                        onChange={handleFormChange(data, "certification", (v) => dispatch(saveSecondLanguage(itemKey, v)))}
                        margin="normal"
                    />
                </ExpansionPanelDetails>
            </EditorComponentWrapper>
        );
    }
}

function mapStateToProps(state: RootState, ownProps: EntryEditorProps): ReduxDataProps<SecondLanguageData> {
    return {
        data: state.cvData.language.otherLanguages.list[ownProps.itemKey]
    };
}

export default connect(mapStateToProps)(SecondLanguageEntryEditorRedux);
