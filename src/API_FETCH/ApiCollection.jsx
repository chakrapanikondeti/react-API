import { API_BASE_URL } from "../Constants/Constants";

export const getAccounts = async () => {
  const data = await fetch(API_BASE_URL + "list")
    .then((res) => res.json())
    .then((accounts) => {
      return accounts;
    });
  return data;
};

export const createAccount = async (data) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  const resData = await fetch(API_BASE_URL + "addaccount", requestOptions)
    .then((res) => res.json())
    .then((account) => {
      return account;
    });
  return resData;
};
