import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    color: "white",
    padding: "10px",
    backgroundColor: "#1D4279",
    textAlign: "center",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      <footer className={classes.footer}>Kandidat : Alif</footer>
    </div>
  );
};

export default Footer;
