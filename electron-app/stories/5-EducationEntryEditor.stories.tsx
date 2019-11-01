import * as React from 'react';
import { EducationData, educationEmpty } from '../src/renderer/model/CvData';
import { EducationEntryEditor } from '../src/renderer/view/cveditor/EducationEntryEditor';
import { EducationDataEditor } from '../src/renderer/view/cveditor/EducationDataEditor';

export default {
    title: 'Education Entry Editor',
};

const emptyData: EducationData = educationEmpty;
export const empty = () => <EducationEntryEditor data={emptyData} update={() => {}} expanded={true}  />;

const titleData: EducationData = { eqfLevel: "", finalGrade: "", from: "", includeInCv: false, institution: "Politecnico", longDescription: "", shortDescription: "", title: "Education title", to: "", updated: false }
export const title = () => <EducationEntryEditor data={titleData} update={() => {}} expanded={true}  />;
export const titleCollapsed = () => <EducationEntryEditor data={titleData} update={() => {}} expanded={false}  />;
