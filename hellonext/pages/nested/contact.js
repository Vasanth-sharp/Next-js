import { Stack, Typography } from "@mui/material";
import Head from "next/head";
import React from "react";

const contact = () => {
  return (
    <>
      <Head>
        <title>Next | Contact</title>
        <meta name="keyword" content="contact" />
      </Head>
      <Stack spacing={5} mt={5} mb={20}>
        <Typography variant="h3">Contacts,</Typography>
        <Typography color="gray">
          Tempor irure exercitation aliquip minim ex dolor culpa eiusmod irure
          ea minim sit. Id irure non velit non. Ipsum est culpa veniam nulla
          velit reprehenderit non incididunt duis occaecat labore sint.
        </Typography>
      </Stack>
    </>
  );
};

export default contact;
