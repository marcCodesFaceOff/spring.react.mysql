import React, { Component } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
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
import axios from "axios";
import { deletePerson } from "../services/table/TableActions";
import { connect } from "react-redux";




const classes = {
    table: {
        minWidth: 600
      },
      avatar: {
        margin: 1,
        color: "blue",
        backgroundColor: blueGrey
      },
      paper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        backgroundColor: "lightGrey"
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

class SimpleTable extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      roster: [],
    };
  }

  componentDidMount() {
    this.getRoster();
  }

  getRoster() {
    const url = "http://localhost:8080/api/roster";
    const config = {
      headers:{
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
      }
    };

    axios.get(url,{}, config)
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          roster: data,
        });      
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deletePerson = (rowId) => {
    this.props.deletePerson(rowId);
    setTimeout(() => {
      if (this.props.personObject != null) {
        this.setState({ show: true });
        setTimeout(() => this.setState({ show: false }), 3000);
        this.findAllBooks(this.state.currentPage);
      } else {
        this.setState({ show: false });
      }
    }, 1000);
  };
  
    // async function getRoster() {
    //   let response = await fetch("/api/roster");
    //   let body = await response.json();
    //   console.log("body:", body[0].bed);
    //   upDateData(body);
    // }

  
    // if (firstLoad) {
    //   getRoster();
    //   setLoad(false);
    // }
  
    // if (data.length > 0) isLoading = false; 
  
    render() {

      const isLoading = false;

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
                  <TableCell align="center">First Name</TableCell>
                  <TableCell align="center">Last Name</TableCell>
                  <TableCell align="center">Case Manager</TableCell>
                  <TableCell align="center">Entry Date</TableCell>
                  <TableCell align="center">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.roster?.map(row => (
                  <TableRow key={row.bed}>
                    <TableCell align="center">{row.firstName}</TableCell>
                    <TableCell align="center">{row.lastName}</TableCell>
                    <TableCell align="center">{row.caseManager}</TableCell>
                    <TableCell align="center">{row.date}</TableCell>
                    <TableCell align="center"><IconButton aria-label="delete" style={{color:"red"}} onClick={() => this.deletePerson(this.state.roster.bed)}><DeleteIcon/></IconButton></TableCell>
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
  }

  const mapStateToProps = (state) => {
    return {
      personObject: state.bed,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      deletePerson: (rowId) => dispatch(deletePerson(rowId)),
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(SimpleTable);
