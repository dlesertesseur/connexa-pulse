import { API } from "../config/api";

export const signIn = async (parameters) => {
  const apiUrl = API.auth.signIn;

  const body = JSON.stringify({
    email: parameters.email,
    password: parameters.password,
  });

  const requestOptions = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  };

  try {
    const res = await fetch(apiUrl, requestOptions);
    const data = await res.json();

    return data;
  } catch (error) {
    return error;
  }
};
