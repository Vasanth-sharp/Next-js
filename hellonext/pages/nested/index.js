import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import React, { use } from "react";

/*
If you export a function called getStaticProps (Static Site Generation) from a page, 
Next.js will pre-render this page at build time using the props returned by getStaticProps.
*/
export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonResponse = await response.json();
  // console.log(jsonResponse)
  return {
    props: {
      users: jsonResponse,
    },
  };
};

const index = (props) => {
  const { users } = props;
  return (
    <>
      <Head>
        <title>Next | User</title>
        <meta name="keyword" content="users" />
      </Head>
      <List>
        {users.length > 0 &&
          users.map((item) => (
            <div key={item.id}>
              <Link href={`/nested/${item.id}`}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </ListItem>
              </Link>
            </div>
          ))}
      </List>
    </>
  );
};

export default index;
