import { IResponse } from "./types/api";

type TOptions = {
  headers: { authorization?: string; "Content-Type": string };
  method?: string;
  body?: string;
};

function checkResponse<T>(
  res: IResponse<T>
): Promise<T> | Promise<never> {
  return res.ok
    ? res.json()
    : Promise.reject([`Ошибка ${res.status}`, res.json()]);
}

export function request<T>(url: string, options: TOptions): Promise<T> {
  console.log(url);
  return fetch(url, options).then(checkResponse);
}
