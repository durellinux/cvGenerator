import {configureStore} from "../src/renderer/configureStore";
import {reduxStory} from "./storyUtils";
import * as React from "react";
import CvEditorRedux from "../src/renderer/view/cveditorredux/CvEditorRedux";

export default {
    title: 'Cv Editor Redux',
};

const emptyStore = configureStore();
export const empty = () => reduxStory(() => <CvEditorRedux />, emptyStore);
