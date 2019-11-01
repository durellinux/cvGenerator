import { IStorageService } from './IStorageService';
import { CvData, cvEmpty } from '../../model/CvData';

export class AsyncStorageService implements IStorageService {
    private static CV_KEY = "cv";

    async load(): Promise<CvData> {
        const cvStringData = localStorage.getItem(AsyncStorageService.CV_KEY);
        if (cvStringData == null) {
            return cvEmpty;
        }

        return JSON.parse(cvStringData);
    }


    async store(cv: CvData): Promise<CvData> {
        const data = JSON.stringify(cv);
        localStorage.setItem(AsyncStorageService.CV_KEY, data);
        return cv;
    }

}
