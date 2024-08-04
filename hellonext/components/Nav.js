import { AppBar, Stack, styled, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  background: "black",
});

const Nav = () => {
  return (
    <AppBar position="static">
      <StyledToolBar>
        <Typography variant="h3">Next</Typography>
        <Stack direction="row" justifyContent="space-between" width="20%">
          <Link href="/" style={{ color: "white" }}>
            Home
          </Link>
          <Link href="/nested/contact" style={{ color: "white" }}>
            Contact
          </Link>
          <Link href="/about" style={{ color: "white" }}>
            about
          </Link>
        </Stack>
      </StyledToolBar>
    </AppBar>
  );
};

export default Nav;
