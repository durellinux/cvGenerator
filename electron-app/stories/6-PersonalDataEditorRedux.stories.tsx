import PersonalDataEditorRedux from '../src/renderer/view/cveditorredux/PersonalDataEditorRedux';
import { configureStore } from '../src/renderer/configureStore';
import { reduxStory } from './storyUtils';
import * as React from 'react';
import { cvEmpty, PersonalData } from '../src/renderer/model/CvData';

const emptyStore = configureStore();
export const empty = () => reduxStory(() => <PersonalDataEditorRedux expanded={false}/>, emptyStore);


const somePersonalData = {...cvEmpty};
somePersonalData.personal = {
    address: "Via Martiri della Libertá, 21",
    cap: "24040",
    city: "Misano di Gera d'Adda",
    country: "Italy",
    email: "durellinux@gmail.com",
    name: "Gianluca",
    surname: "Durelli",
    website: "www.gianlucadurelli.com",
    phoneNumber: "+39333",
    updated: false
};
const somePersonalDataStore = configureStore({cvData: somePersonalData});
export const someData = () => reduxStory(() => <PersonalDataEditorRedux expanded={true}/>, somePersonalDataStore);

export default {
    title: 'Personal Data Editor Redux',
};

