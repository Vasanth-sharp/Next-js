import React from "react";

function layout({ children }) {
  return (
    <div>
      <h1>ssr</h1>
      {children}
      <h1>ssr</h1>
    </div>
  );
}

export default layout;
