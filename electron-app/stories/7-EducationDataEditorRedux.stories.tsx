import * as React from 'react';

import {configureStore} from "../src/renderer/configureStore";
import {reduxStory} from "./storyUtils";
import EducationDataEditorRedux from "../src/renderer/view/cveditorredux/EducationDataEditorRedux";

export default {
    title: 'Education Data Editor Redux',
};

const emptyStore = configureStore();
export const empty = () => reduxStory(() => <EducationDataEditorRedux expanded={true}/>, emptyStore);
