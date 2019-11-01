import { BioDataEditor } from '../src/renderer/view/cveditor/BioDataEditor';
import * as React from 'react';

export default {
    title: 'Bio Data Editor',
};

const emptyData = "";
export const empty = () => <BioDataEditor data={{value: emptyData, updated: false}} update={() => {}} expanded={true}/>;

const longTextData = "This is a bio describing myself, with a lot of serious details to impress the reader." +
    "This description can be a very very very long text, that spans multiple lines and the form editor should not complain about this." +
    "This description can be a very very very long text, that spans multiple lines and the form editor should not complain about this." +
    "This description can be a very very very long text, that spans multiple lines and the form editor should not complain about this." +
    "This description can be a very very very long text, that spans multiple lines and the form editor should not complain about this.";
export const longText = () => <BioDataEditor data={{ updated: false, value: longTextData }} update={() => {}} expanded={true}/>;
