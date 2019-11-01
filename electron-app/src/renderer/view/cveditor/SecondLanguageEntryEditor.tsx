import { AbstractEditorComponent } from './AbstractEditorComponent';
import { SecondLanguageData } from '../../model/CvData';
import { ReactNode } from 'react';
import * as React from 'react';
import { ExpansionPanelDetails, TextField } from '@material-ui/core';
import { handleFormChange } from '../../util/FormUtils';

export class SecondLanguageEntryEditor extends AbstractEditorComponent<SecondLanguageData> {
    protected getTitle(): string {
        return this.state.language;
    }

    protected renderContent(data: SecondLanguageData): ReactNode {
        return (
            <ExpansionPanelDetails style={{display: "flex", flexDirection: "column"}}>
                <TextField
                    id="language"
                    label="Language"
                    value={data.language}
                    onChange={handleFormChange(this.state, "language", (v) => this.setState(v))}
                    margin="normal"
                />
                <TextField
                    id="reading"
                    label="Reading"
                    value={data.reading}
                    onChange={handleFormChange(this.state, "reading", (v) => this.setState(v))}
                    margin="normal"
                />
                <TextField
                    id="writing"
                    label="Writing"
                    value={data.writing}
                    onChange={handleFormChange(this.state, "writing", (v) => this.setState(v))}
                    margin="normal"
                />
                <TextField
                    id="speaking-production"
                    label="Speaking Production"
                    value={data.spokenProduction}
                    onChange={handleFormChange(this.state, "spokenProduction", (v) => this.setState(v))}
                    margin="normal"
                />
                <TextField
                    id="speaking-interaction"
                    label="Speaking Interaction"
                    value={data.spokenInteraction}
                    onChange={handleFormChange(this.state, "spokenInteraction", (v) => this.setState(v))}
                    margin="normal"
                />
                <TextField
                    id="certifications"
                    label="Certifications"
                    value={data.certification}
                    onChange={handleFormChange(this.state, "certification", (v) => this.setState(v))}
                    margin="normal"
                />
            </ExpansionPanelDetails>
        );
    }

}
