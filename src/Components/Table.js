import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { blueGrey } from "@mui/material/colors";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
const classes = {
  table: {
    minWidth: 600,
  },
  avatar: {
    margin: 1,
    color: "blue",
    backgroundColor: blueGrey,
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "lightGrey",
  },
  link: {
    color: "rgba(0,0,0,0.65)",
    textDecoration: "none",
    marginLeft: "10%",
    alignSelf: "flex-start",
    "&:hover": {
      color: "rgba(0,0,0,1)",
    },
  },
};

export default function SimpleTable() {
  const [roster, setRoster] = React.useState([]);
  const [rowId, setRowId] = React.useState("");
  const [firstLoad, setLoad] = React.useState(true);

  let isLoading = true;
  const url = "http://localhost:8080/api/roster";
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };

  async function sampleFunc() {
    let response = await fetch(url, config);
    let body = await response.json();
    setRoster(body);
  }

  const handleDelete = (input) => {
    console.log("Inside Handle Delete!!!");
    setRowId(input);
    console.log(rowId);
    deletePerson(rowId);
  };

  const deletePerson = (bedID) => {
    console.log("Inside DeletePerson!!!");
    axios
      .delete(url + bedID, config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (firstLoad) {
    sampleFunc();
    setLoad(false);
  }

  if (roster.length > 0) isLoading = false;

  return (
    <div style={classes.paper}>
      <Typography component="h1" variant="h5">
        New Directions
      </Typography>
      <Avatar style={classes.avatar}></Avatar>
      <Typography component="h1" variant="h6">
        Pathways Roster
      </Typography>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <TableContainer
          style={{ width: "80%", margin: "0 10px" }}
          component={Paper}
        >
          <Table style={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow style={{}}>
                <TableCell align="center">First Name</TableCell>
                <TableCell align="center">Last Name</TableCell>
                <TableCell align="center">Case Manager</TableCell>
                <TableCell align="center">Entry Date</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {roster.length === 0 ? (
                <tr align="center">
                  <td colSpan="7" style={{ color: "red" }}>
                    Roster is empty!
                  </td>
                </tr>
              ) : (
                roster.map((row) => (
                  <TableRow key={row.bed}>
                    <TableCell align="center">{row.firstName}</TableCell>
                    <TableCell align="center">{row.lastName}</TableCell>
                    <TableCell align="center">{row.caseManager}</TableCell>
                    <TableCell align="center">{row.date}</TableCell>
<<<<<<< HEAD:frontend/src/Components/Table.js
                    <TableCell align="center">
                      <IconButton
                        aria-label="delete"
                        style={{ color: "red" }}
                        onClick={() => handleDelete(row.bed)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
=======
                    <TableCell align="center"><IconButton aria-label="delete" style={{color:"red"}} onClick={() => this.handleDelete(row.bed)}><DeleteIcon/></IconButton></TableCell>
>>>>>>> dev:src/Components/Table.js
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Link style={classes.link} to="/">
        <Typography align="left">&#x2190; Head back to save data</Typography>
      </Link>
    </div>
  );
}
