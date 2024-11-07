import axios from "axios";
import { HttpResponse, IHttpClient } from "../../contracts/http-clients";

export class AxiosHttpClient implements IHttpClient {
  async request(params: IHttpClient.Params): Promise<HttpResponse<any>> {
    const { data } = await axios.request<HttpResponse>(params);
    return { data };
  }
}
