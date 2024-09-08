import React from "react";

const getData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
      {
        cache: "no-store",
      }
    );
    const jsonresponse = await response.json();
    console.log(jsonresponse)
    return jsonresponse;
  } catch (err) {
    console.log(err.message);
  }
};

async function ssr() {
  const user = await getData();
  return (
    <div>
      {user && (
        <div>
          <h1>{user.name}</h1>
          <h2>{user.email}</h2>
          <h3>{user.website}</h3>
        </div>
      )}
    </div>
  );
}

export default ssr;
