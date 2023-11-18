export interface IResponse<T> extends Response {
  json(): Promise<T>;
}
