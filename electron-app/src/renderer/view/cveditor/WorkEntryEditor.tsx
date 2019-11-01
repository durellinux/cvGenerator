import { AbstractEditorComponent } from './AbstractEditorComponent';
import { EducationData, WorkExperienceData } from '../../model/CvData';
import { ReactNode } from 'react';
import * as React from 'react';
import { ExpansionPanelDetails, TextField } from '@material-ui/core';
import { handleFormChange } from '../../util/FormUtils';

export class WorkEntryEditor extends AbstractEditorComponent<WorkExperienceData> {
    protected getTitle(): string {
        if (this.state.role) {
            return `${this.state.role} - ${this.state.company}`;
        }

        return this.state.company;
    }

    protected renderContent(data: WorkExperienceData): ReactNode {
        return (
            <ExpansionPanelDetails style={{display: "flex", flexDirection: "column"}}>
                <TextField
                    id="role"
                    label="Role"
                    value={data.role}
                    onChange={handleFormChange(this.state, "role", (v) => this.setState(v))}
                    margin="normal"
                />
                <TextField
                    id="company"
                    label="Company"
                    value={data.company}
                    onChange={handleFormChange(this.state, "company", (v) => this.setState(v))}
                    margin="normal"
                />
                <TextField
                    id="from"
                    label="From"
                    value={data.from}
                    onChange={handleFormChange(this.state, "from", (v) => this.setState(v))}
                    margin="normal"
                />
                <TextField
                    id="to"
                    label="To"
                    value={data.to}
                    onChange={handleFormChange(this.state, "to", (v) => this.setState(v))}
                    margin="normal"
                />
                <TextField
                    id="shortDescription"
                    label="Short Description"
                    value={data.shortDescription}
                    onChange={handleFormChange(this.state, "shortDescription", (v) => this.setState(v))}
                    margin="normal"
                    multiline={true}
                    variant="outlined"
                />
                <TextField
                    id="shortDescription"
                    label="Long Description"
                    value={data.longDescription}
                    onChange={handleFormChange(this.state, "longDescription", (v) => this.setState(v))}
                    margin="normal"
                    multiline={true}
                    variant="outlined"
                />
            </ExpansionPanelDetails>
        );
    }
}
