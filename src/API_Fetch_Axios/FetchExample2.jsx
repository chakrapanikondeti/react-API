import React, { useEffect, useState } from "react";
import { getUsers } from "./ApiCollection1";

const userApiUrl = "https://jsonplaceholder.typicode.com/users";

export default function FetchExample2() {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const data = await getUsers();
    console.log(data);
    setUserList(data);
  };
  return (
    <>
      <div>
        <h2>Fetch Example2</h2>
        <ul>
          {userList.map((user, index) => (
            <li key={user.id}>
              {user.id}.{user.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
