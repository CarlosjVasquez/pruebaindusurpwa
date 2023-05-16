import axios from 'axios';
import https from 'https';

export type AsyncApiResponse<T> = Promise<ApiResponse<T>>;
export type ApiResponse<T> = {
  error?: ErrorResponse;
  data?: T;
};
export type ErrorResponse = {
  status: number;
  statusText: string;
  content: any;
  exception?: any;
};

type EndpointData = {
  host: string;
  port: number;
  ssl?: boolean;
};

export type SingleRequest = {
  type: 'GET' | 'POST';
  path: string;
  request: any;
};

export function makeError(
  code: number,
  text: string,
  data: any,
  exception?: any
): ApiResponse<any> {
  return {
    error: {
      status: code,
      statusText: text,
      content: data,
      exception,
    },
  };
}

const sendRequest = (endpoint?: EndpointData) => {
  const headers: any = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };
  const useEndponint = endpoint || {
    host: 'localhost',
    port: 4000,
    ssl: false,
  };

  return axios.create({
    baseURL: `${useEndponint.ssl === true ? 'https' : 'http'}://${
      useEndponint.host
    }${useEndponint.port !== 0 ? ':' + useEndponint.port : ''}/`,
    headers,
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  });
};

const rederRequest = async (
  endpoint?: EndpointData,
  singleRequest?: SingleRequest
): Promise<any> => {
  const headers: any = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };
  const useEndponint = endpoint || {
    host: 'localhost',
    port: 4000,
    ssl: false,
  };
  let response: any = null;

  if (!singleRequest) {
    return axios.create({
      baseURL: `${useEndponint.ssl ? 'https' : 'http'}://${useEndponint.host}:${
        useEndponint.port
      }/`,
      headers,
    });
  }

  if (singleRequest) {
    const request = axios.create({
      baseURL: `${useEndponint.ssl ? 'https' : 'http'}://${useEndponint.host}:${
        useEndponint.port
      }/`,
      headers,
    });
    if (singleRequest.type === 'POST')
      response = await request.post(singleRequest.path, singleRequest.request);
    if (singleRequest.type === 'GET')
      response = await request.get(singleRequest.path);
  }

  if (response) {
    if (response.status && [200, 201, 204].includes(response.status)) {
      return response;
    }
  }
  return makeError(-1, 'Unknown Error', response?.data);
};

export default sendRequest;

function makeResponse<T>(response: any): ApiResponse<T> {
  const result: ApiResponse<T> = {
    data:
      response.data == ''
        ? null
        : response.data != null && typeof response.data != 'undefined'
        ? response.data
        : response,
  };
  return result;
}

export async function sendRequestNew<T>(
  endpoint?: EndpointData,
  singleRequest?: SingleRequest
): AsyncApiResponse<T> {
  const response = await rederRequest(endpoint, singleRequest);
  return makeResponse<T>(response);
}
