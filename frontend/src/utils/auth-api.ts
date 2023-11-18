// import { getCookie } from "./cookie-api";
import { request } from "./api";
import { IScore } from "./types/props";

const getServerAuth = (form: { name: string; password: string }) => {
  return request<{ user: string; score: string }>(
    `${process.env.REACT_APP_SERVER_API_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }
  );
};

const getServerUser = (name: string): any =>
  request(`${process.env.REACT_APP_SERVER_API_URL}/search/?name=${name}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

const getServerUsersScore = () =>
  request<IScore[]>(`http://localhost:8000/api/v1/level/all`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

const getServerRegister = (form: { name: string; password: string }): any => {
  return request(`http://localhost:8000/api/v1/user/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
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
    headers: {
      "Content-Type": "application/json",
    },
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
