import { AbstractEditorComponent } from './AbstractEditorComponent';
import { SkillData } from '../../model/CvData';
import { ReactNode } from 'react';
import * as React from 'react';
import { ExpansionPanelDetails, TextField } from '@material-ui/core';
import { handleFormChange } from '../../util/FormUtils';

export class SkillEntryEditor extends AbstractEditorComponent<SkillData> {
    protected getTitle(): string {
        return `${this.state.name} (${this.state.level}/100)`;
    }

    protected renderContent(data: SkillData): ReactNode {
        return (
            <ExpansionPanelDetails style={{display: "flex", flexDirection: "column"}}>
                <TextField
                    id="name"
                    label="Name"
                    value={data.name}
                    onChange={handleFormChange(this.state, "name", (v) => this.setState(v))}
                    margin="normal"
                />
                <TextField
                    id="level"
                    label="Level"
                    value={data.level}
                    onChange={handleFormChange(this.state, "level", (v) => this.setState(v))}
                    margin="normal"
                />
            </ExpansionPanelDetails>
        );
    }

}
