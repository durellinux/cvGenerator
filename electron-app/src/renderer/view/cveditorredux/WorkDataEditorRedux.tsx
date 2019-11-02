import {IEditorReduxProps, ReduxDataProps} from "./IEditorProps";
import {ListData, PersonalData, WorkExperienceData} from "../../model/CvData";
import * as React from "react";
import {RootState} from "../../reducers";
import {connect} from "react-redux";
import {Button, ExpansionPanelDetails} from "@material-ui/core";
import * as _ from "lodash";
import WorkEntryEditorRedux from "./WorkEntryEditorRedux";
import {EditorComponentWrapper} from "./EditorComponentWrapper";
import {addWork} from "../../actions/cvDataActions";

class WorkDataEditorRedux extends React.Component<IEditorReduxProps<ListData<WorkExperienceData>>, any> {
    public render(): React.ReactNode {
        const {data: reduxData, expanded} = this.props;
        const data = reduxData.list;
        return (
            <EditorComponentWrapper
                title="Work Experience"
                expanded={expanded}
            >
                <ExpansionPanelDetails style={{display: "flex", flexDirection: "column"}}>
                    <Button size="small" variant="contained" color="primary" onClick={this.addEntry} style={{alignSelf: "flex-end"}}>
                        Add Entry
                    </Button>
                    { data.length > 0 ?
                        _.map(data, (d, key) => <WorkEntryEditorRedux key={key} itemKey={key} expanded={false}/>)
                        :
                        <div>Add your first entry</div>
                    }
                </ExpansionPanelDetails>
            </EditorComponentWrapper>
        );
    }

    private addEntry = () => {
        const {dispatch} = this.props;
        dispatch(addWork());
    }
}


function mapStateToProps(state: RootState): ReduxDataProps<ListData<WorkExperienceData>> {
    return {
        data: state.cvData.workExperience
    };
}

export default connect(mapStateToProps)(WorkDataEditorRedux);
