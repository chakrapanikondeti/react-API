import React, { useEffect, useState } from "react";

const userApiUrl = "https://jsonplaceholder.typicode.com/users";

export default function FetchExample1() {
  const [userlist, setUserList] = useState([]);
  useEffect(() => {
    fetch(userApiUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserList(data);
      });
  }, []);
  return (
    <>
      <div>
        <h2>Fetch Example1 - Get method</h2>
        <ul>
          {userlist.map((user, index) => (
            <li key={user.id}>
              {user.id}.{user.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
