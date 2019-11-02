import { connect, DispatchProp } from 'react-redux';
import * as React from 'react';
import {IReduxProps, ReduxDataProps} from './IEditorProps';
import { RootState } from '../../reducers';
import PersonalDataEditorRedux from './PersonalDataEditorRedux';
import BioDataEditorRedux from './BioDataEditorRedux';
import EducationDataEditorRedux from "./EducationDataEditorRedux";
import {
    Button,
    ExpansionPanel,
    ExpansionPanelActions,
    ExpansionPanelDetails,
    ExpansionPanelSummary
} from "@material-ui/core";
import {IStorageService} from "../../service/storage/IStorageService";
import {AsyncStorageService} from "../../service/storage/AsyncStorageService";
import {CvData} from "../../model/CvData";
import {setAsStored} from "../../actions/cvDataActions";
import WorkDataEditorRedux from "./WorkDataEditorRedux";
import LanguageDataEditorRedux from "./LanguageDataEditorRedux";
import SkillDataEditorRedux from "./SkillDataEditorRedux";

class CvEditorRedux extends React.Component<IReduxProps<CvData>, any> {
    private storage: IStorageService;

    constructor(props: Readonly<IReduxProps<CvData>>) {
        super(props);
        this.storage = new AsyncStorageService();
    }

    render(): React.ReactNode {
        const {data} = this.props;
        return (
            <ExpansionPanel defaultExpanded={true} style={{flex: 1, display: "flex", flexDirection: "column", background: "#FFFFFF"}}>
                <ExpansionPanelSummary>Cv Data Editor</ExpansionPanelSummary>
                <ExpansionPanelDetails style={{flex: 1, display: "flex", flexDirection: "column"}}>
                    <PersonalDataEditorRedux
                        expanded={false}
                    />
                    <BioDataEditorRedux expanded={false} />
                    <EducationDataEditorRedux expanded={false} />
                    <WorkDataEditorRedux expanded={false} />
                    <LanguageDataEditorRedux expanded={false} />
                    <SkillDataEditorRedux expanded={false} />
                </ExpansionPanelDetails>
                <ExpansionPanelActions>
                    <Button disabled={!data.updated} variant="contained" size="small" color="primary" onClick={this.storeCv}>
                        Save
                    </Button>
                </ExpansionPanelActions>
            </ExpansionPanel>
        );
    }

    private storeCv = async () => {
        try {
            const {data, dispatch} = this.props;
            await this.storage.store(data);
            dispatch(setAsStored());
        } catch (e) {
            alert(`Error storing cv: ${e}`);
        }
    }
}

function mapStateToProps(state: RootState): ReduxDataProps<CvData> {
    return {
        data: state.cvData
    };
}

export default connect(mapStateToProps)(CvEditorRedux);
