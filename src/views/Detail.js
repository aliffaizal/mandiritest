import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/styles";
import { useParams } from "react-router-dom";
import { Container, Card, CardContent, Typography } from "@material-ui/core";
import Footer from "./Footer";

const Detail = () => {
  const useStyles = makeStyles(() => ({
    root: {
      position: "fixed",
      minHeight: "100vh",
      minWidth: "100%",
      top: 0,
      left: 0,
      alignItems: "center",
      display: "flex",
      backgroundColor: "#F3F7FB",
    },
    card: {
      width: "100%",
      padding: "40px",
    },
  }));
  const params = useParams();
  const classes = useStyles();
  const [coin, setCoin] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.coinpaprika.com/v1/coins/${params.id}`)
      .then((res) => {
        setCoin(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <Container maxWidth="xl" className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            <h4 style={{ color: "#2569A5" }}>Coin Detail</h4>
            <Typography>ID: {coin.id}</Typography>
            <Typography>Name: {coin.name}</Typography>
            <Typography>Symbol: {coin.symbol}</Typography>
            <Typography>Type: {coin.type}</Typography>
            <Typography>Active: {coin.is_active ? "True" : "False"}</Typography>
            <Typography>Is New ?: {coin.is_new ? "True" : "False"}</Typography>
          </CardContent>
        </Card>
      </Container>
      <Footer />
    </div>
  );
};

export default Detail;
