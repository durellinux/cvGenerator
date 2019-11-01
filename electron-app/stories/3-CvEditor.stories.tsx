import * as React from 'react';
import { CvData, cvEmpty } from '../src/renderer/model/CvData';
import { CvEditor } from '../src/renderer/view/cveditor/CvEditor';

export default {
    title: 'Cv Editor',
};

const emptyData: CvData = cvEmpty;
export const empty = () => <CvEditor data={emptyData} update={() => {}} expanded={true}/>;
