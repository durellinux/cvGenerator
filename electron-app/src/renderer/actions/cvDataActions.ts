import { Action, ActionCreator } from 'redux';
import { CvData, EducationData, PersonalData, SecondLanguageData, SkillData, WorkExperienceData } from '../model/CvData';

export enum CV_ACTION_TYPES {
    SET_AS_STORED,
    SAVE_CV,
    SAVE_PERSONAL,
    SAVE_BIO,
    ADD_EDUCATION,
    SAVE_EDUCATION,
    ADD_WORK,
    SAVE_WORK,
    ADD_SECOND_LANGUAGE,
    SAVE_MOTHER_LANGUAGE,
    SAVE_SECOND_LANGUAGE,
    ADD_SKILL,
    SAVE_SKILL,
};

export interface ReduxAction<T extends Action> {
    get(...args: any[]): ActionCreator<T>;
}

export interface IActionWithEnum<T> extends Action {
    type: T,
}

// export class ActionWithEnum<T extends CV_ACTION_TYPES> implements ReduxAction<IActionWithEnum<T>> {
//     get(...args: any[]): ActionCreator<IActionWithEnum<T>> {
//         return () => (
//             {
//                 type: T
//             }
//         )
//     }
// }

export interface IActionWithPayload<T, P> extends IActionWithEnum<T> {
    payload: P;
}

export interface IActionWithIndexPayload<T, P> extends IActionWithEnum<T> {
    payload: P;
    index: number;
}


export interface SaveCvAction extends IActionWithPayload<CV_ACTION_TYPES.SAVE_CV, CvData> {}
export const saveCv: ActionCreator<SaveCvAction> = (cv: CvData) => ({
    type: CV_ACTION_TYPES.SAVE_CV,
    payload: cv,
});

export interface SavePersonalAction extends IActionWithPayload<CV_ACTION_TYPES.SAVE_PERSONAL, PersonalData> {}
export const savePersonal: ActionCreator<SavePersonalAction> = (data: PersonalData) => ({
    type: CV_ACTION_TYPES.SAVE_PERSONAL,
    payload: data,
});

export interface SaveBioAction extends IActionWithPayload<CV_ACTION_TYPES.SAVE_BIO, string> {}
export const saveBio: ActionCreator<SaveBioAction> = (data: string) => ({
    type: CV_ACTION_TYPES.SAVE_BIO,
    payload: data,
});

export interface AddEducationAction extends IActionWithEnum<CV_ACTION_TYPES.ADD_EDUCATION> {}
export const addEducation: ActionCreator<AddEducationAction> = () => ({
    type: CV_ACTION_TYPES.ADD_EDUCATION,
});

export interface SaveEducationAction extends IActionWithIndexPayload<CV_ACTION_TYPES.SAVE_EDUCATION, EducationData> {}
export const saveEducation: ActionCreator<SaveEducationAction> = (index: number, data: EducationData) => ({
    index,
    type: CV_ACTION_TYPES.SAVE_EDUCATION,
    payload: data,
});

export interface AddWorkAction extends IActionWithEnum<CV_ACTION_TYPES.ADD_WORK> {}
export const addWork: ActionCreator<AddWorkAction> = () => ({
    type: CV_ACTION_TYPES.ADD_WORK,
});

export interface SaveWorkAction extends IActionWithIndexPayload<CV_ACTION_TYPES.SAVE_WORK, WorkExperienceData> {}
export const saveWork: ActionCreator<SaveWorkAction> = (index: number, data: WorkExperienceData) => ({
    index,
    type: CV_ACTION_TYPES.SAVE_WORK,
    payload: data,
});

export interface AddSecondLanguageAction extends IActionWithEnum<CV_ACTION_TYPES.ADD_SECOND_LANGUAGE> {}
export const addSecondLanguage: ActionCreator<AddSecondLanguageAction> = () => ({
    type: CV_ACTION_TYPES.ADD_SECOND_LANGUAGE,
});

export interface SaveMotherLanguageAction extends IActionWithPayload<CV_ACTION_TYPES.SAVE_MOTHER_LANGUAGE, string> {}
export const saveMotherLanguage: ActionCreator<SaveMotherLanguageAction> = (data: string) => ({
    type: CV_ACTION_TYPES.SAVE_MOTHER_LANGUAGE,
    payload: data,
});

export interface SaveSecondLanguageAction extends IActionWithIndexPayload<CV_ACTION_TYPES.SAVE_SECOND_LANGUAGE, SecondLanguageData> {}
export const saveSecondLanguage: ActionCreator<SaveSecondLanguageAction> = (index: number, data: SecondLanguageData) => ({
    index,
    type: CV_ACTION_TYPES.SAVE_SECOND_LANGUAGE,
    payload: data,
});

export interface AddSkillAction extends IActionWithEnum<CV_ACTION_TYPES.ADD_SKILL> {}
export const addSkill: ActionCreator<AddSkillAction> = () => ({
    type: CV_ACTION_TYPES.ADD_SKILL,
});

export interface SaveSkillAction extends IActionWithIndexPayload<CV_ACTION_TYPES.SAVE_SKILL, SkillData> {}
export const saveSkill: ActionCreator<SaveSkillAction> = (index: number, data: SkillData) => ({
    index,
    type: CV_ACTION_TYPES.SAVE_SKILL,
    payload: data,
});

export interface SetAsStoredAction extends IActionWithEnum<CV_ACTION_TYPES.SET_AS_STORED> {}
export const setAsStored: ActionCreator<SetAsStoredAction> = () => ({
    type: CV_ACTION_TYPES.SET_AS_STORED,
});

export type CvDataActions = SaveCvAction | SavePersonalAction | SaveBioAction |
    AddEducationAction | SaveEducationAction | AddWorkAction | SaveWorkAction |
    AddSecondLanguageAction | SaveSecondLanguageAction | SaveMotherLanguageAction |
    AddSkillAction | SaveSkillAction | SetAsStoredAction;
