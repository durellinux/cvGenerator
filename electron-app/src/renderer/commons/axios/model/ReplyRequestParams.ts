import { AxiosRequestConfig, AxiosResponse } from 'axios';

export default interface ReplyRequestParams {
    initialRequest: AxiosRequestConfig;
    resolve: (r: AxiosResponse<any>) => any;
    reject: (r: any) => any;
}
