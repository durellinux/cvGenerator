import { AbstractEditorComponent } from './AbstractEditorComponent';
import { LanguageData, ListData, SecondLanguageData, secondLanguageEmpty } from '../../model/CvData';
import { ReactNode } from 'react';
import * as React from 'react';
import { Button, ExpansionPanelDetails, TextField } from '@material-ui/core';
import * as _ from 'lodash';
import { handleFormChange } from '../../util/FormUtils';
import { SecondLanguageEntryEditor } from './SecondLanguageEntryEditor';

export class LanguageDataEditor extends AbstractEditorComponent<LanguageData> {
    private static TITLE: string = "Language";

    protected getTitle(): string {
        return LanguageDataEditor.TITLE;
    }

    protected renderContent(data: LanguageData): ReactNode {
        return (
            <ExpansionPanelDetails style={{ display: "flex", flexDirection: "column" }}>
                <TextField
                    id="motherlanguage"
                    label="Mother Language"
                    value={data.motherLanguage}
                    onChange={handleFormChange(this.state, "motherLanguage", (v) => this.setState(v))}
                    margin="normal"
                />
                <Button size="small" variant="contained" color="primary" onClick={this.addEntry} style={{ alignSelf: "flex-end" }}>
                    Add Entry
                </Button>
                {data.otherLanguages.list.length > 0 ?
                    _.map(data.otherLanguages.list, (d, key) => <SecondLanguageEntryEditor data={d} update={(data: SecondLanguageData) => this.updateEntry(key, data)} expanded={false}/>)
                    :
                    <div>Add your first entry</div>
                }
            </ExpansionPanelDetails>
        );
    }


    private addEntry: () => void = () => {
        const newList = [...this.state.otherLanguages.list, secondLanguageEmpty];
        const newSecondLanguageData: ListData<SecondLanguageData> = {
            list: newList,
            updated: true,
        };
        this.setState({...this.state, "otherLanguages": newSecondLanguageData});
    };

    private updateEntry = (index: number, data: SecondLanguageData) => {
        const newList = [...this.state.otherLanguages.list];
        data.updated = false;
        newList[index] = data;
        const newSecondLanguageData: ListData<SecondLanguageData> = {
            list: newList,
            updated: true,
        };
        this.setState({...this.state, "otherLanguages": newSecondLanguageData});
    }
}
