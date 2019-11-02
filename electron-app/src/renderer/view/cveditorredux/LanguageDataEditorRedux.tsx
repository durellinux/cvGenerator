import {IEditorReduxProps, ReduxDataProps} from "./IEditorProps";
import {LanguageData, PersonalData, SecondLanguageData} from "../../model/CvData";
import * as React from "react";
import {RootState} from "../../reducers";
import {connect} from "react-redux";
import {Button, ExpansionPanelDetails, TextField} from "@material-ui/core";
import {handleFormChange} from "../../util/FormUtils";
import * as _ from "lodash";
import {addSecondLanguage, saveMotherLanguage} from "../../actions/cvDataActions";
import SecondLanguageEntryEditorRedux from "./SecondLanguageEntryEditorRedux";
import {EditorComponentWrapper} from "./EditorComponentWrapper";

class LanguageDataEditorRedux extends React.Component<IEditorReduxProps<LanguageData>, any> {
    public render(): React.ReactNode {
        const {data, dispatch, expanded} = this.props;
        return (
            <EditorComponentWrapper
                title="Language"
                expanded={expanded}
            >
                <ExpansionPanelDetails style={{ display: "flex", flexDirection: "column" }}>
                    <TextField
                        id="motherlanguage"
                        label="Mother Language"
                        value={data.motherLanguage}
                        onChange={handleFormChange(data, "motherLanguage", (v) => dispatch(saveMotherLanguage(v.motherLanguage)))}
                        margin="normal"
                    />
                    <Button size="small" variant="contained" color="primary" onClick={this.addEntry} style={{ alignSelf: "flex-end" }}>
                        Add Entry
                    </Button>
                    {data.otherLanguages.list.length > 0 ?
                        _.map(data.otherLanguages.list, (d, key) => <SecondLanguageEntryEditorRedux key={key} itemKey={key} expanded={false}/>)
                        :
                        <div>Add your first entry</div>
                    }
                </ExpansionPanelDetails>
            </EditorComponentWrapper>
        );
    }

    private addEntry = () => {
        const {dispatch} = this.props;
        dispatch(addSecondLanguage());
    }
}

function mapStateToProps(state: RootState): ReduxDataProps<LanguageData> {
    return {
        data: state.cvData.language
    };
}

export default connect(mapStateToProps)(LanguageDataEditorRedux);
