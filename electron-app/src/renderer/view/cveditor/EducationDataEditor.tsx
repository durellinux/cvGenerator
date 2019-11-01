import { EducationData, educationEmpty, ListData } from '../../model/CvData';
import { ReactNode } from 'react';
import { Button, ExpansionPanelDetails } from '@material-ui/core';
import * as _ from 'lodash';
import * as React from 'react';
import { EducationEntryEditor } from './EducationEntryEditor';
import { AbstractEditorComponent } from './AbstractEditorComponent';

export class EducationDataEditor extends AbstractEditorComponent<ListData<EducationData>> {
    private static TITLE: string = "Education";

    protected getTitle(): string {
        return EducationDataEditor.TITLE;
    }

    protected renderContent(currentState: ListData<EducationData>): ReactNode {
        const data = currentState.list;
        return (
            <ExpansionPanelDetails style={{display: "flex", flexDirection: "column"}}>
                <Button size="small" variant="contained" color="primary" onClick={this.addEntry} style={{alignSelf: "flex-end"}}>
                    Add Entry
                </Button>
                { data.length > 0 ?
                    _.map(data, (d, key) => <EducationEntryEditor data={d} update={(data: EducationData) => this.updateEntry(key, data)} expanded={false}/>)
                    :
                    <div>Add your first entry</div>
                }
            </ExpansionPanelDetails>
        );
    }

    private addEntry: () => void = () => {
        const newList = [...this.state.list, educationEmpty];
        this.setState({...this.state, "list": newList});
    };

    private updateEntry = (index: number, data: EducationData) => {
        const newList = [...this.state.list];
        data.updated = false;
        newList[index] = data;
        this.setState({...this.state, "list": newList});
    }
}
