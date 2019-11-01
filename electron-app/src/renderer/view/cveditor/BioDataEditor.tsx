import * as React from 'react';
import { ExpansionPanelDetails, TextField } from '@material-ui/core';
import { ReactNode } from 'react';
import { AbstractEditorComponent } from './AbstractEditorComponent';
import { ValueData } from '../../model/CvData';

export class BioDataEditor extends AbstractEditorComponent<ValueData<string>> {
    private static TITLE: string = "Bio";

    protected getTitle(): string {
        return BioDataEditor.TITLE;
    }

    protected renderContent(currentState: ValueData<string>): ReactNode {
        return (
            <ExpansionPanelDetails style={{display: "flex", flexDirection: "column"}}>
                <TextField
                    id="bio"
                    label="Bio"
                    multiline={true}
                    value={currentState.value}
                    onChange={(event) => this.setState({...currentState, value: event.target.value})}
                    margin="normal"
                    variant="outlined"
                />
            </ExpansionPanelDetails>
        );
    }
}
