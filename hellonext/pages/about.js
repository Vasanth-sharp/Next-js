import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Head from "next/head";
import React from "react";

const about = () => {
  return (
    <>
      <Head>
        <title>Next | About</title>
        <meta name="keyword" content="About" />
      </Head>
      <Stack spacing={5} mt={5} mb={20}>
        <Typography variant="h3">About,</Typography>
        <Typography color="gray">
          Tempor irure exercitation aliquip minim ex dolor culpa eiusmod irure
          ea minim sit. Id irure non velit non. Ipsum est culpa veniam nulla
          velit reprehenderit non incididunt duis occaecat labore sint.
        </Typography>
      </Stack>
    </>
  );
};

export default about;
