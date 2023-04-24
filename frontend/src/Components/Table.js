import React from "react";
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
import CircularProgress from "@mui/material/CircularProgress";
import { blueGrey } from "@mui/material/colors";

const classes = {
    table: {
        minWidth: 600
      },
      avatar: {
        margin: 1,
        backgroundColor: blueGrey
      },
      paper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: `10px`,
        height: "100%",
        width: "99%",
        marginTop: 7
      },
      link: {
        color: "rgba(0,0,0,0.65)",
        textDecoration: "none",
        marginLeft: "10%",
        alignSelf: "flex-start",
        "&:hover": {
          color: "rgba(0,0,0,1)"
        }
      }
}


export default function SimpleTable() {
  
    const [data, upDateData] = React.useState([]);
    const [firstLoad, setLoad] = React.useState(true);
    let isLoading = true;
  
    async function getRoster() {
      let response = await fetch("/api/roster");
      let body = await response.json();
      console.log(body);
      upDateData(body);
    }
  
    if (firstLoad) {
      getRoster();
      setLoad(false);
    }
  
    if (data.length > 0) isLoading = false;
  
    return (
      <div style={classes.paper}>       
        <Typography component="h1" variant="h5">
          New Directions
        </Typography>
        <Avatar style={classes.avatar}>
        </Avatar>
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
                <TableRow style={{  }}>
                  <TableCell align="center">Bed#</TableCell>
                  <TableCell align="center">First Name</TableCell>
                  <TableCell align="center">Last Name</TableCell>
                  <TableCell align="center">Case Manager</TableCell>
                  <TableCell align="center">Entry Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map(row => (
                  <TableRow key={row.name}>
                    <TableCell align="center">{row.bed}</TableCell>
                    <TableCell align="center">{row.firstName}</TableCell>
                    <TableCell align="center">{row.lastName}</TableCell>
                    <TableCell align="center">{row.gender}</TableCell>
                    <TableCell align="center">{row.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        <Link style={classes.link} to="/">
          <Typography align="left">
            &#x2190; Head back to save data
          </Typography>
        </Link>
      </div>
    );
  }