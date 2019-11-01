import { EducationData } from '../../model/CvData';
import { ReactNode } from 'react';
import * as React from 'react';
import { ExpansionPanelDetails, TextField } from '@material-ui/core';
import { handleFormChange } from '../../util/FormUtils';
import { AbstractEditorComponent } from './AbstractEditorComponent';

export class EducationEntryEditor extends AbstractEditorComponent<EducationData> {
    protected getTitle(): string {
        return this.state.title;
    }

    protected renderContent(data: EducationData): ReactNode {
        return (
            <ExpansionPanelDetails style={{display: "flex", flexDirection: "column"}}>
                <TextField
                    id="title"
                    label="Title"
                    value={data.title}
                    onChange={handleFormChange(this.state, "title", (v) => this.setState(v))}
                    margin="normal"
                />
                <TextField
                    id="instiution"
                    label="Institution"
                    value={data.institution}
                    onChange={handleFormChange(this.state, "institution", (v) => this.setState(v))}
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
                    id="grade"
                    label="Final Grade"
                    value={data.finalGrade}
                    onChange={handleFormChange(this.state, "finalGrade", (v) => this.setState(v))}
                    margin="normal"
                />
                <TextField
                    id="eqfLevel"
                    label="EQF Level"
                    value={data.eqfLevel}
                    onChange={handleFormChange(this.state, "eqfLevel", (v) => this.setState(v))}
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
