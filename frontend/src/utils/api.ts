const checkResponse = (res: any) => {
  console.log(res)
  return res.ok ? res.json() : Promise.reject(res.status);
};

export function request(url: string, options?: RequestInit) {
  console.log(url)
  return fetch(url, options).then(checkResponse);
}
