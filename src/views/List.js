import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  TableContainer,
  Button,
  Select,
  FormControl,
  InputLabel,
  TextField,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import { useHistory } from "react-router-dom";

const columns = [
  { id: "id", label: "ID", minWidth: "150" },
  { id: "name", label: "Name", minWidth: "150" },
  { id: "symbol", label: "Symbol", minWidth: "150" },
  { id: "rank", label: "Rank", minWidth: "150" },
  { id: "type", label: "Type", minWidth: "150" },
  { id: "active", label: "Active", minWidth: "150" },
  { id: "action", label: "Action", minWidth: "150" },
];

const useStyles = makeStyles((theme) => ({
  root: {
    background: "white",
    // position: "fixed",
    paddingBottom: "50px",
    minHeight: "100vh",
    minWidth: "100%",
    top: 0,
    left: 0,
    alignItems: "center",
    // display: "flex",
    paddingLeft: "100px",
    paddingRight: "100px",
    // textAlign: "center",
  },
  paper: {
    width: "100%",
    padding: "30px",
  },
  container: {
    maxHeight: 440,
  },
  colortxt: {
    color: "#65768B",
  },
  formControl: {
    margin: "theme.spacing(1)",
    minWidth: 120,
    marginBottom: "10px",
  },
  selectEmpty: {
    marginTop: "theme.spacing(2)",
  },
  txtField: {
    marginLeft: "20px",
    padding: "10px",
  },
}));

const List = () => {
  const classes = useStyles();
  const history = useHistory();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [coin, setCoin] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.coinpaprika.com/v1/coins/")
      .then((res) => {
        setCoin(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <Container
        maxWidth="xl"
        className={classes.root}
        style={{ backgroundColor: "#F3F7FB" }}
      >
        <Paper className={classes.paper}>
          <h4 style={{ color: "#2569A5" }}>Coin List</h4>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Select</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
            ></Select>
          </FormControl>
          <TextField
            className={classes.txtField}
            id="outlined-basic"
            label="Search"
            variant="outlined"
            size="small"
          >
            <SearchIcon />
          </TextField>
          <Button
            style={{
              backgroundColor: "#2569A5",
              color: "white",
              marginTop: "10px",
            }}
          >
            Search
          </Button>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      style={{
                        minWidth: column.minWidth,
                        backgroundColor: "#3783C6",
                        color: "white",
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {coin
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((coins) => (
                    <TableRow key={coins.id} className={classes.colortxt}>
                      <TableCell
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          // console.log("test");
                          history.push(`/${coins.id}`);
                        }}
                      >
                        {coins.id}
                      </TableCell>
                      <TableCell>{coins.name}</TableCell>
                      <TableCell>{coins.symbol}</TableCell>
                      <TableCell>{coins.rank}</TableCell>
                      <TableCell>{coins.type}</TableCell>
                      <TableCell>
                        {coins.is_active ? "True" : "False"}
                      </TableCell>
                      <TableCell>
                        <Button variant="contained" color="secondary">
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={coin.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Container>
    </div>
  );
};

export default List;
