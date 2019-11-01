import { RootState } from './index';
import { Reducer } from 'redux';
import { CvData, cvEmpty, educationEmpty, secondLanguageEmpty, skillEmpty, workEmpty } from '../model/CvData';
import { CV_ACTION_TYPES, CvDataActions } from '../actions/cvDataActions';

const defaultState = cvEmpty;

export const cvDataReducer: Reducer<CvData> = (
    state = defaultState,
    action: CvDataActions
) => {
    switch(action.type) {
        case CV_ACTION_TYPES.SAVE_PERSONAL:
            return {
                ...state,
                personal: action.payload,
            };
        case CV_ACTION_TYPES.SAVE_BIO:
            return {
                ...state,
                bio: {
                    ...state.bio,
                    value: action.payload
                }
            };
        case CV_ACTION_TYPES.ADD_EDUCATION:
            const addEducationList = [...state.education.list, educationEmpty];
            return {
                ...state,
                education: {
                    ...state.education,
                    list: addEducationList
                }
            };
        case CV_ACTION_TYPES.SAVE_EDUCATION:
            const saveEducationList = [...state.education.list];
            saveEducationList[action.index] = action.payload;
            return {
                ...state,
                education: {
                    ...state.education,
                    list: saveEducationList
                }
            };
        case CV_ACTION_TYPES.ADD_WORK:
            const addWorkList = [...state.workExperience.list, workEmpty];
            return {
                ...state,
                workExperience: {
                    ...state.workExperience,
                    list: addWorkList
                }
            };
        case CV_ACTION_TYPES.SAVE_WORK:
            const saveWorkList = [...state.workExperience.list];
            saveWorkList[action.index] = action.payload;
            return {
                ...state,
                workExperience: {
                    ...state.workExperience,
                    list: saveWorkList
                }
            };
        case CV_ACTION_TYPES.ADD_SECOND_LANGUAGE:
            const addSecondLanguageList = [...state.language.otherLanguages.list, secondLanguageEmpty];
            return {
                ...state,
                language: {
                    ...state.language,
                    otherLanguages: {
                        ...state.language.otherLanguages,
                        list: addSecondLanguageList
                    }
                }
            };
        case CV_ACTION_TYPES.SAVE_MOTHER_LANGUAGE:
            return {
                ...state,
                language: {
                    ...state.language,
                    motherLanguage: action.payload,
                }
            };
        case CV_ACTION_TYPES.SAVE_SECOND_LANGUAGE:
            const saveSecondLanguageList = [...state.language.otherLanguages.list];
            saveSecondLanguageList[action.index] = action.payload;
            return {
                ...state,
                language: {
                    ...state.language,
                    otherLanguages: {
                        ...state.language.otherLanguages,
                        list: saveSecondLanguageList
                    }
                }
            };
        case CV_ACTION_TYPES.ADD_SKILL:
            const addSkillList = [...state.skills.list, skillEmpty];
            return {
                ...state,
                skills: {
                    ...state.skills,
                    list: addSkillList
                }
            };
        case CV_ACTION_TYPES.SAVE_SKILL:
            const saveSkillList = [...state.skills.list];
            saveSkillList[action.index] = action.payload;
            return {
                ...state,
                skills: {
                    ...state.skills,
                    list: saveSkillList
                }
            };
        case CV_ACTION_TYPES.SAVE_CV:
            return {
                ...state,
                cvData: action.payload,
            };
        default:
            return state;
    }
};
