import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import IAxiosInstance from '../IAxiosInstance';
import ReplyRequestParams from '../model/ReplyRequestParams';
import Optional from '../../types/Optional';

export default abstract class AbstractAxiosInstance implements IAxiosInstance {
    private axiosInstance: AxiosInstance;

    constructor($axiosInstance: AxiosInstance) {
        this.axiosInstance = $axiosInstance;
    }

    public getAxiosInstance(): AxiosInstance {
        return this.axiosInstance;
    }

    public ejectRequestInterceptor(key: number): void {
        this.axiosInstance.interceptors.request.eject(key);
    }

    public setRequestInterceptor(
        interceptor: (config: AxiosRequestConfig) => AxiosRequestConfig
    ): number {
        return this.axiosInstance.interceptors.request.use(interceptor);
    }

    public setResponseInterceptor(
        onFulfilled?: (value: AxiosResponse) => AxiosResponse,
        onRejected?: (error: any) => any
    ): number {
        return this.axiosInstance.interceptors.response.use(onFulfilled, onRejected);
    }

    public ejectResponseInterceptor(key: number): void {
        this.axiosInstance.interceptors.response.eject(key);
    }

    public replayRequest(params: ReplyRequestParams) {
        axios(params.initialRequest)
            .then(response => {
                params.resolve(response);
            })
            .catch(reason => {
                params.reject(reason);
            });
    }

    public setBaseUrl(baseURL: string): void {
        this.axiosInstance.defaults.baseURL = baseURL;
    }

    public getBaseUrl(): Optional<string> {
        return Optional.ofMaybe(this.axiosInstance.defaults.baseURL);
    }

    public delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.axiosInstance.delete(url, config).then((t: AxiosResponse<T>) => t.data);
    }

    public get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.axiosInstance.get<T>(url, config).then((t: AxiosResponse<T>) => t.data);
    }

    public patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        return this.axiosInstance.patch<T>(url, data, config).then((t: AxiosResponse<T>) => t.data);
    }

    public post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        return this.axiosInstance.post<T>(url, data, config).then((t: AxiosResponse<T>) => t.data);
    }

    public put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        return this.axiosInstance.put<T>(url, data, config).then((t: AxiosResponse<T>) => t.data);
    }
}
