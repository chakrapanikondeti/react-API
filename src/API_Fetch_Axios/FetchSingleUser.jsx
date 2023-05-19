import React, { useEffect, useState } from "react";
import { getUser, getUsers } from "./ApiCollectionSingleUser";
import { Card, CardContent, Typography } from "@mui/material";

const userApiUrl = "https://jsonplaceholder.typicode.com/users";

export default function FetchSingleUser() {
  const [userList, SetUserList] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    getAllUsers();
    getSingleUser();
  }, []);

  const getAllUsers = async () => {
    const data = await getUsers();
    SetUserList(data);
  };
  const getSingleUser = async (id) => {
    const data = await getUser(id);
    setUser(data);
  };

  return (
    <>
      <div>FetchSingleUser</div>
      <ul>
        {userList.map((user, index) => (
          <li key={user.id}>
            {user.id}.{user.name}
            <button onClick={() => getSingleUser(user.id)}>show details</button>
          </li>
        ))}
      </ul>

      <Card sx={{ maxWidth: 475 }}>
        <CardContent>
          <Typography variant="h4">{user.id}</Typography>
          <Typography variant="h4">{user.username}</Typography>
          <Typography variant="h4">{user.name}</Typography>
          <Typography variant="h4">{user.email}</Typography>
        </CardContent>
      </Card>
    </>
  );
}
