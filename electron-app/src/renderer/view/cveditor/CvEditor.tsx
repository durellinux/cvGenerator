import * as React from 'react';
import { PureComponent, ReactNode } from 'react';
import { IEditorProps } from './IEditorProps';
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, TextField } from '@material-ui/core';
import { CvData, EducationData, LanguageData, ListData, PersonalData, SkillData, Updatable, ValueData, WorkExperienceData } from '../../model/CvData';
import { PersonalDataEditor } from './PersonalDataEditor';
import { BioDataEditor } from './BioDataEditor';
import { EducationDataEditor } from './EducationDataEditor';
import { WorkDataEditor } from './WorkDataEditor';
import { LanguageDataEditor } from './LanguageDataEditor';
import { SkillsDataEditor } from './SkillsDataEditor';

export class CvEditor extends PureComponent<IEditorProps<CvData>> {

    constructor(props: IEditorProps<CvData>, context: any) {
        super(props, context);
    }

    render(): ReactNode {
        const { data: cvData } = this.props;

        return (
            <div style={{display: "flex", flexDirection: "column", flex: 1}}>
                <PersonalDataEditor
                    data={cvData.personal}
                    update={ (newData: PersonalData) => this.propagateUpdate(newData, "personal")}
                    expanded={false}
                />
                <BioDataEditor
                    data={cvData.bio}
                    update={ (newData: ValueData<string>) => this.propagateUpdate(newData, "bio")}
                    expanded={false}
                />
                <EducationDataEditor
                    data={cvData.education}
                    update={(newData: ListData<EducationData>) => this.propagateUpdate(newData, "education")}
                    expanded={false}
                />
                <WorkDataEditor
                    data={cvData.workExperience}
                    update={(newData: ListData<WorkExperienceData>) => this.propagateUpdate(newData, "workExperience")}
                    expanded={false}
                />
                <LanguageDataEditor
                    data={cvData.language}
                    update={(newData: LanguageData) => this.propagateUpdate(newData, "language")}
                    expanded={false}
                />
                <SkillsDataEditor
                    data={cvData.skills}
                    update={(newData: ListData<SkillData>) => this.propagateUpdate(newData, "skills")}
                    expanded={false}
                />

            </div>
        );
    }

    private propagateUpdate<T extends Updatable>(newValue: T, key: keyof CvData) {
        const {update, data} = this.props;
        const storedValue: T = {
            ...newValue,
            updated: false,
        };
        const updatedProps = {
            ...data,
            [key]: storedValue,
        };
        update(updatedProps);
    }
}
