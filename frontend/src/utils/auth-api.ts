// import { getCookie } from "./cookie-api";
import { request } from "./api";

const getServerAuth = (form: { name: string; password: string }): any => {
  return request(`${process.env.REACT_APP_SERVER_API_URL}/auth/login`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(form),
  });
};

const getServerUser = (name: string) : any=>
  request(`${process.env.REACT_APP_SERVER_API_URL}/search/?name=${name}`, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });

const getServerUsersScore = (): any =>
  request(`http://localhost:8000/api/v1/level/all`, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });

const getServerRegister = (form: { name: string; password: string }): any => {
  return request(`${process.env.REACT_APP_SERVER_API_URL}/user`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(form),
  });
};

const getServerSendScore = (
  form: {
    name: string;
    name_level: string;
    score: number;
  },
  id: string
): any => {
  return request(`${process.env.REACT_APP_SERVER_API_URL}/user/update/${id}`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(form),
  });
};

export {
  getServerUser,
  getServerAuth,
  getServerSendScore,
  getServerUsersScore,
  getServerRegister,
};
