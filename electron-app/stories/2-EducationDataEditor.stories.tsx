import * as React from 'react';
import { EducationDataEditor } from '../src/renderer/view/cveditor/EducationDataEditor';
import { EducationData } from '../src/renderer/model/CvData';

export default {
    title: 'Education Data Editor',
};

const emptyData: EducationData[] = [];
export const empty = () => <EducationDataEditor data={{ updated: false, list: emptyData }} update={() => {}} expanded={true}/>;
