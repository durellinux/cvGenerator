import {EducationData, educationEmpty, ListData, PersonalData} from '../../model/CvData';
import { Button, ExpansionPanelDetails } from '@material-ui/core';
import * as _ from 'lodash';
import * as React from 'react';
import {IEditorReduxProps, ReduxDataProps} from "./IEditorProps";
import {RootState} from "../../reducers";
import {connect} from "react-redux";
import {addEducation, saveEducation} from "../../actions/cvDataActions";
import EducationEntryEditorRedux from "./EducationEntryEditorRedux";
import {EditorComponentWrapper} from "./EditorComponentWrapper";


class EducationDataEditorRedux extends React.Component<IEditorReduxProps<ListData<EducationData>>, any> {
    public render(): React.ReactNode {
        const {data: reduxData} = this.props;
        const data = reduxData.list;
        return (
            <EditorComponentWrapper
                title="Education"
                expanded={false}
            >
                <ExpansionPanelDetails style={{display: "flex", flexDirection: "column"}}>
                    <Button size="small" variant="contained" color="primary" onClick={this.addEntry} style={{alignSelf: "flex-end"}}>
                        Add Entry
                    </Button>
                    { data.length > 0 ?
                        _.map(data, (d, key) => <EducationEntryEditorRedux key={key} itemKey={key} expanded={false}/>)
                        :
                        <div>Add your first entry</div>
                    }
                </ExpansionPanelDetails>
            </EditorComponentWrapper>
        );
    }

    private addEntry = () => {
        const { dispatch } = this.props;
        dispatch(addEducation());
    };
}


function mapStateToProps(state: RootState): ReduxDataProps<ListData<EducationData>> {
    return {
        data: state.cvData.education
    };
}

export default connect(mapStateToProps)(EducationDataEditorRedux);

