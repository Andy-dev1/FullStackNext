export type HttpResponse<TData = any> = {
  data: TData;
};

export type HttpMethod = "get" | "put" | "delete" | "post";

export type ParamsHttp = {
  method: HttpMethod;
  url: string;
};

export interface IHttpClient<TData = any> {
  request(params: IHttpClient.Params): Promise<HttpResponse<TData>>;
}

export namespace IHttpClient {
  export type Params = ParamsHttp;
}
