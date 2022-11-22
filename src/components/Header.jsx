import React, { useState } from "react";

import { AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { SideDrawer } from "./SideDrawer";

export const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (value) => {
    setDrawerOpen(value);
  };

  //   const open = () => {
  //     setDrawerOpen(true);
  //     console.log(drawerOpen);
  //   };

  //   const close = () => {
  //     setDrawerOpen(false);
  //   };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#2f2f2f",
        boxShadow: "none",
        padding: "10px 10px",
      }}
    >
      <Toolbar>
        <div className="header_logo">
          <div className="font_righteous header_logo_venue">The Venue</div>
          <div className="header_logo_title">Experience 2022</div>
        </div>
        <IconButton
          aria-label="Menu"
          color="inherit"
          onClick={() => toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <SideDrawer
          open={drawerOpen}
          onClose={(value) => toggleDrawer(value)}
        />
      </Toolbar>
    </AppBar>
  );
};
