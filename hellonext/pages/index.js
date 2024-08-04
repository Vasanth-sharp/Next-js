import { Box, Chip, Stack, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Box sx={{marginBottom:5}}>
      <Head>
        <title>Next | Home</title>
        <meta name="keyword" content="home"/>
      </Head>
      <Stack alignItems="center" justifyContent="center" >
        <Image src="/1.png" width={400} height={250} style={{marginTop:20}} alt="Next"/>
        <Stack spacing={5} mt={2} mb={5} alignSelf="flex-start">
          <Typography variant="h3">Introduction,</Typography>
          <Typography color="gray">
            Tempor irure exercitation aliquip minim ex dolor culpa eiusmod irure
            ea minim sit. Id irure non velit non. Ipsum est culpa veniam nulla
            velit reprehenderit non incididunt duis occaecat labore sint.
            Laboris velit sit exercitation cupidatat sit anim. Aliquip commodo eu eiusmod tempor excepteur magna consequat elit proident minim dolore occaecat dolor et. Ad anim velit occaecat velit est dolor irure aliquip sit ad nulla id sit. Dolor aliqua consequat ex consectetur nisi non id veniam dolore laborum do nulla ipsum mollit. Consectetur elit aliquip cupidatat reprehenderit dolore do cillum laborum voluptate nostrud in incididunt.
          </Typography>
        </Stack>
        <Link href="/nested"><Chip label="go to user"/></Link>
      </Stack>
    </Box>
  );
}
