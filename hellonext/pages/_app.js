import Layout from "@/components/Layout";
import { Container } from "@mui/material";

export default function App({ Component, pageProps }) {
  return <Layout><Container><Component {...pageProps} /></Container></Layout>
}
