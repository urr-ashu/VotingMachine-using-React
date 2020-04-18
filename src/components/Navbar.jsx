import { AppBar, Typography } from "@material-ui/core";
import React from "react";
import "../App.css";

function Navbar() {
    return (
    <AppBar position="static">
    <Typography  align = "center" variant="h3">
        WELCOME VOTERS
    </Typography>
    </AppBar>
    );
}

export default Navbar;