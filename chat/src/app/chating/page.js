// import Chatbot from '@/components/Chatbot'
import React from "react";

import dynamic from "next/dynamic";
const Chatbot = dynamic(() => import("../../components/Chatbot"), {
  ssr: false,
});

function Chating() {
  /*
  Navigator[chatbot try to access navigator,not avialable during SSR] object is browser specific[browser env],
  but our component is SSR ,
  next try to render it in server,so that it causin error

  we should make that chatbot component render only in client side,we want to dynamically import the component to 
  avoid prerender 
  */

  return(
    <div style={{display: "flex", justifyContent: "flex-end",height:"100vh", alignItems: "center"}}>
    <Chatbot/>
  </div>
  )
}

export default Chating;
