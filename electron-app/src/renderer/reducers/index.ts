import { combineReducers } from 'redux';

import { CvData } from '../model/CvData';
import { cvDataReducer } from './cvDataReducer';

export interface RootState {
    cvData: CvData;
}

export const rootReducer = combineReducers<RootState | undefined>({
    cvData: cvDataReducer
});
