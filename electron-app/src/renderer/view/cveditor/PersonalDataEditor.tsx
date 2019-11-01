import * as React from 'react';
import { ReactNode } from 'react';
import { ExpansionPanelDetails, TextField } from '@material-ui/core';
import { handleFormChange } from '../../util/FormUtils';
import { PersonalData } from '../../model/CvData';
import { AbstractEditorComponent } from './AbstractEditorComponent';

export class PersonalDataEditor extends AbstractEditorComponent<PersonalData> {
    private static TITLE: string = "Personal";

    protected getTitle(): string {
        return PersonalDataEditor.TITLE;
    }

    protected renderContent(currentState: PersonalData): ReactNode {
        const data = currentState;
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
                    id="surname"
                    label="Surname"
                    value={data.surname}
                    onChange={handleFormChange(this.state, "surname", (v) => this.setState(v))}
                    margin="normal"
                />
                <TextField
                    id="address"
                    label="Address"
                    value={data.address}
                    onChange={handleFormChange(this.state, "address", (v) => this.setState(v))}
                    margin="normal"
                />
                <TextField
                    id="city"
                    label="City"
                    value={data.city}
                    onChange={handleFormChange(this.state, "city", (v) => this.setState(v))}
                    margin="normal"
                />
                <TextField
                    id="zipCode"
                    label="Zip Code"
                    value={data.cap}
                    onChange={handleFormChange(this.state, "cap", (v) => this.setState(v))}
                    margin="normal"
                />
                <TextField
                    id="country"
                    label="Country"
                    value={data.country}
                    onChange={handleFormChange(this.state, "country", (v) => this.setState(v))}
                    margin="normal"
                />
                <TextField
                    id="email"
                    label="Email"
                    value={data.email}
                    onChange={handleFormChange(this.state, "email", (v) => this.setState(v))}
                    margin="normal"
                />
                <TextField
                    id="website"
                    label="Website"
                    value={data.website}
                    onChange={handleFormChange(this.state, "website", (v) => this.setState(v))}
                    margin="normal"
                />
            </ExpansionPanelDetails>
        );
    }
}
