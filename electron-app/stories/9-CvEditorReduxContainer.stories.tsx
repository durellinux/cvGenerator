import {configureStore} from "../src/renderer/configureStore";
import {reduxStory} from "./storyUtils";
import CvEditorRedux from "../src/renderer/view/cveditorredux/CvEditorRedux";
import * as React from "react";
import CvEditorReduxContainer from "../src/renderer/view/cveditorredux/CvEditorReduxContainer";

export default {
    title: 'Cv Editor Container Redux',
};

const emptyStore = configureStore();
export const empty = () => reduxStory(() => <CvEditorReduxContainer />, emptyStore);
