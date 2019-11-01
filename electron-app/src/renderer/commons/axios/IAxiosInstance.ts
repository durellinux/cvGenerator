import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import ReplyRequestParams from './model/ReplyRequestParams';

export default interface IAxiosInstance {
    getAxiosInstance(): AxiosInstance;
    ejectRequestInterceptor(key: number): void;
    setRequestInterceptor(interceptor: (config: AxiosRequestConfig) => AxiosRequestConfig): number;
    setResponseInterceptor(
        onFulfilled?: (value: AxiosResponse) => AxiosResponse,
        onRejected?: (error: any) => any
    ): number;
    ejectResponseInterceptor(key: number): void;
    replayRequest(params: ReplyRequestParams): void;
    setBaseUrl(baseURL: string): void;

    post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
}
