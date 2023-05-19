import React, { useEffect, useRef, useState } from "react";
import { createAccount, getAccounts } from "./ApiCollection";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default function FetchGetMethod() {
  const [accountList, setAccountList] = useState([]);
  const [accountKeys, setAccountKeys] = useState([]);

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    getAllAccounts();
  }, []);

  const getAllAccounts = async () => {
    const data = await getAccounts();
    console.log("All accounts", data);
    setAccountList(data);
    setAccountKeys(Object.keys(data));
  };

  const handleSubmit = async () => {
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(username, email, password);
    if (username && email && password) {
      const resData = await createAccount({ username, email, password });
      console.log("ResData", resData);
      getAllAccounts();
    }
  };

  return (
    <>
      <div className="m-5">
        <h2>Post Method</h2>
        <div className="mb-4">
          <h1>Add Account</h1>
          <input
            type="text"
            name="username"
            ref={usernameRef}
            placeholder="Username"
          />
          <input type="email" name="email" ref={emailRef} placeholder="Email" />
          <input
            type="password"
            name="password"
            ref={passwordRef}
            placeholder="Password"
          />
          <button onClick={handleSubmit}>Add Account</button>
        </div>

        <h2>FetchGetMethod</h2>

        <TableContainer component={Paper} className="mb-5">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">ID</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Password</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {accountKeys.map((id) => {
                <TableRow
                  key={id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="right">
                    {id}
                  </TableCell>
                  <TableCell>{accountList[id].username}</TableCell>
                  <TableCell>{accountList[id].email}</TableCell>
                  <TableCell>{accountList[id].password}</TableCell>
                </TableRow>;
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
