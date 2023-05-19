import React, { useEffect } from "react";
const userApiUrl = "https://jsonplaceholder.typicode.com/users";

export default function FetchExample() {
  useEffect(() => {
    fetch(userApiUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <>
      <div>fetch Example</div>
    </>
  );
}
