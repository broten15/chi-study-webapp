import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

const NUM_CHAPS = 6;

function Navbar() {
  const navigate = useNavigate();

  function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }

  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo} onClick={() => {navigate('/');}}>
          CHI312L Vocab and Patterns
        </Typography>
          <div className={classes.navlinks}>
            {range(1, NUM_CHAPS).map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
                onClick={() => {navigate(`/${page}`);}}
              >
                Chapter {page}
              </Button>
              ))}
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;