import { Stack, Typography } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Details = () => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const jsonResponse = await response.json();
      setUser(jsonResponse);
    };
    fetchUser();
  }, [id]);
  return (
    <div>
        <Head>
            <title>Next | {id}</title>
        </Head>
      {user && (
        <Stack spacing={5} m={20}>
          <Typography variant="h3">{user.name}</Typography>
          <Typography variant="subtitle1" color="gray">
            {user.username}
          </Typography>
          <Typography variant="subtitle1" color="gray">
            {user.email}
          </Typography>
        </Stack>
      )}
    </div>
  );
};

export default Details;
