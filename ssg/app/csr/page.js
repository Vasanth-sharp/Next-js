"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Csr() {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((res) => setUser(res))
      .catch((err) => console.log(err.message));
  }, []);
  const handleToast=()=>{
    toast.success("hi")
  }
  return (
    <div>
      {user && (
        <div>
          <h1>{user.name}</h1>
          <h2>{user.email}</h2>
          <h3>{user.website}</h3>
        </div>
      )}
      <button onClick={handleToast}>Toast</button>
    </div>
  );
}

export default Csr;
