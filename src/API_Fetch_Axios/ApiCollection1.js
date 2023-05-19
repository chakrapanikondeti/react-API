const userApiUrl = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async () => {
  const data = await fetch(userApiUrl)
    .then((res) => res.json())
    .then((users) => {
      return users;
    });
  console.log(data);
  return data;
};
