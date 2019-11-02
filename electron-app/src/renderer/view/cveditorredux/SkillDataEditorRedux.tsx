import {IEditorReduxProps, ReduxDataProps} from "./IEditorProps";
import {LanguageData, ListData, SkillData} from "../../model/CvData";
import * as React from "react";
import {RootState} from "../../reducers";
import {connect} from "react-redux";
import {Button, ExpansionPanelDetails} from "@material-ui/core";
import * as _ from "lodash";
import {addSkill} from "../../actions/cvDataActions";
import {EditorComponentWrapper} from "./EditorComponentWrapper";
import SkillEntryEditorRedux from "./SkillEntryEditorRedux";

class SkillDataEditorRedux extends React.Component<IEditorReduxProps<ListData<SkillData>>, any> {
    public render(): React.ReactNode {
        const {data: reduxData, expanded} = this.props;
        const data = reduxData.list;

        return (
            <EditorComponentWrapper
                title="Skills"
                expanded={expanded}
            >
                <ExpansionPanelDetails style={{display: "flex", flexDirection: "column"}}>
                    <Button size="small" variant="contained" color="primary" onClick={this.addEntry} style={{alignSelf: "flex-end"}}>
                        Add Entry
                    </Button>
                    { data.length > 0 ?
                        _.map(data, (d, key) => <SkillEntryEditorRedux key={key} itemKey={key} expanded={false}/>)
                        :
                        <div>Add your first entry</div>
                    }
                </ExpansionPanelDetails>
            </EditorComponentWrapper>
        );
    }

    private addEntry = () => {
        const {dispatch} = this.props;
        dispatch(addSkill());
    }
}


function mapStateToProps(state: RootState): ReduxDataProps<ListData<SkillData>> {
    return {
        data: state.cvData.skills
    };
}

export default connect(mapStateToProps)(SkillDataEditorRedux);
