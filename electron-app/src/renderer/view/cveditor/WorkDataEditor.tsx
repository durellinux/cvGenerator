import { AbstractEditorComponent } from './AbstractEditorComponent';
import { EducationData, educationEmpty, ListData, workEmpty, WorkExperienceData } from '../../model/CvData';
import { ReactNode } from 'react';
import * as React from 'react';
import { Button, ExpansionPanelDetails } from '@material-ui/core';
import * as _ from 'lodash';
import { EducationEntryEditor } from './EducationEntryEditor';
import { WorkEntryEditor } from './WorkEntryEditor';

export class WorkDataEditor extends AbstractEditorComponent<ListData<WorkExperienceData>> {
    private static TITLE: string = "Work Experience";

    protected getTitle(): string {
        return WorkDataEditor.TITLE;
    }

    protected renderContent(currentState: ListData<WorkExperienceData>): ReactNode {
        const data = currentState.list;
        return (
            <ExpansionPanelDetails style={{display: "flex", flexDirection: "column"}}>
                <Button size="small" variant="contained" color="primary" onClick={this.addEntry} style={{alignSelf: "flex-end"}}>
                    Add Entry
                </Button>
                { data.length > 0 ?
                    _.map(data, (d, key) => <WorkEntryEditor data={d} update={(data: WorkExperienceData) => this.updateEntry(key, data)} expanded={false}/>)
                    :
                    <div>Add your first entry</div>
                }
            </ExpansionPanelDetails>
        );
    }


    private addEntry: () => void = () => {
        const newList = [...this.state.list, workEmpty];
        this.setState({...this.state, "list": newList});
    };

    private updateEntry = (index: number, data: WorkExperienceData) => {
        const newList = [...this.state.list];
        data.updated = false;
        newList[index] = data;
        this.setState({...this.state, "list": newList});
    }

}
