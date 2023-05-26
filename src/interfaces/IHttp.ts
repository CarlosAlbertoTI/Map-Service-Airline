export interface PropsHttpMethods {
    url: string,
    body?: object,
    headers?: object
    query?:object
}

export interface IHttp {

     get(props: PropsHttpMethods): Promise<() => Promise<{data:object}>>
     post(props: PropsHttpMethods): Promise<() => Promise<{data:object}>>
     put(props: PropsHttpMethods): Promise<() => Promise<{data:object}>>
     delete(props: PropsHttpMethods): Promise<() => Promise<{data:object}>>
}