import { AbstractEditorComponent } from './AbstractEditorComponent';
import { EducationData, educationEmpty, ListData, SkillData, skillEmpty } from '../../model/CvData';
import { ReactNode } from 'react';
import * as React from 'react';
import { Button, ExpansionPanelDetails } from '@material-ui/core';
import * as _ from 'lodash';
import { EducationEntryEditor } from './EducationEntryEditor';
import { SkillEntryEditor } from './SkillEntryEditor';

export class SkillsDataEditor extends AbstractEditorComponent<ListData<SkillData>> {
    private static TITLE: string = "Skills";

    protected getTitle(): string {
        return SkillsDataEditor.TITLE;
    }

    protected renderContent(currentState: ListData<SkillData>): ReactNode {
        const data = currentState.list;
        return (
            <ExpansionPanelDetails style={{display: "flex", flexDirection: "column"}}>
                <Button size="small" variant="contained" color="primary" onClick={this.addEntry} style={{alignSelf: "flex-end"}}>
                    Add Entry
                </Button>
                { data.length > 0 ?
                    _.map(data, (d, key) => <SkillEntryEditor data={d} update={(data: SkillData) => this.updateEntry(key, data)} expanded={false}/>)
                    :
                    <div>Add your first entry</div>
                }
            </ExpansionPanelDetails>
        );
    }


    private addEntry: () => void = () => {
        const newList = [...this.state.list, skillEmpty];
        this.setState({...this.state, "list": newList});
    };

    private updateEntry = (index: number, data: SkillData) => {
        const newList = [...this.state.list];
        data.updated = false;
        newList[index] = data;
        this.setState({...this.state, "list": newList});
    }

}
