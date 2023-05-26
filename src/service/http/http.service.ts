import { AxiosInstance } from "axios";
import { IHttp, PropsHttpMethods } from "../../interfaces/IHttp";
import { axiosInstance } from "../../libs/axios";

export class AxiosHttpService implements IHttp{
    _service: AxiosInstance;

    constructor(baseUrl:string){
        this._service = axiosInstance(baseUrl)
    }

    async get(props: PropsHttpMethods): Promise<() => Promise<{data:object}>> {
        const result = await this._service.get(`${props.url}`,props.headers)
        return result.data
    }
    async post(props: PropsHttpMethods): Promise<() => Promise<{data:object}>> {
        const result = await this._service.post(`${props.url}`,props.body, props.headers)
        return result.data
    }
    async put(props: PropsHttpMethods): Promise<() => Promise<{data:object}>> {
        const result = await this._service.put(`${props.url}`,props.body,props.headers)
        return result.data
    }
    async delete(props: PropsHttpMethods): Promise<() => Promise<{data:object}>> {
        const result = await this._service.delete(`${props.url}`,props.body)
        return result.data
    }

}