import { CvData } from '../../model/CvData';

export interface IStorageService {
    store(cv: CvData): Promise<CvData>;
    load(): Promise<CvData>;
}
