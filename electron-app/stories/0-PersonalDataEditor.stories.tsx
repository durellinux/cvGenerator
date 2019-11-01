import * as React from 'react';

import { PersonalData } from '../src/renderer/model/CvData';
import { PersonalDataEditor } from '../src/renderer/view/cveditor/PersonalDataEditor';

export default {
    title: 'Personal Data Editor',
};

const emptyData: PersonalData = { address: "", cap: "", city: "", country: "", email: "", name: "", surname: "", website: "", updated: false };
export const empty = () => <PersonalDataEditor data={emptyData} update={() => {}} expanded={true}/>;

const somePersonalData: PersonalData = {
    address: "Via Martiri della Libertá, 21",
    cap: "24040",
    city: "Misano di Gera d'Adda",
    country: "Italy",
    email: "durellinux@gmail.com",
    name: "Gianluca",
    surname: "Durelli",
    website: "www.gianlucadurelli.com",
    updated: false
};
export const someData = () => <PersonalDataEditor data={somePersonalData} update={() => {}} expanded={true}/>;

export const collapsed = () => <PersonalDataEditor data={emptyData} update={() => {}} expanded={false}/>;

