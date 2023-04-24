import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from '@mui/material/Button';
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { grey } from "@mui/material/colors";

var classes = {
    paper: {
        marginTop: 7,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      },
      avatar: {
        margin: 1,
        backgroundColor: grey
      },
      form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: 3
      },
      submit: {
        margin: 3
      },
      textField: {
        marginLeft: 1,
        marginRight: 1,
        width: "100%"
      }  
}


export default function AddPerson() {

    const [firstLoad, setLoad] = React.useState(true);
    
    const [selectedDate, setSelectedDate] = React.useState(
      new Date("2023-04-02T21:11:54")
    );
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [caseManager, setCaseManager] = React.useState("");
  
    const handleDateChange = date => setSelectedDate(date);
    const handleFirstNameChange = event => setFirstName(event.target.value);
    const handleLastNameChange = event => setLastName(event.target.value);
    const handleCaseManagerChange = event => setCaseManager(event.target.value);
  
    const [message, setMessage] = React.useState("Nothing saved in the session");
  
    async function sampleFunc(toInput) {
      const response = await fetch("/api/roster", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json"
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *client
        body: JSON.stringify(toInput) // body data type must match "Content-Type" header
    });
      let body = await response.json();
      console.log(body.id);
      setMessage(body.id ? "Data sucessfully updated" : "Data update failed");
    }
  
    const handleSubmit = variables => {
      const toInput = { firstName, lastName, caseManager, date: selectedDate };
      sampleFunc(toInput);
      setFirstName("");
      setLastName("");
      setCaseManager("");
      setSelectedDate("");
    };
  
    if (firstLoad) {
      setLoad(false);
    }
  
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div style={classes.paper}>
        <Typography component="h1" variant="h5">
            New Directions
          </Typography>
          <Avatar style={classes.avatar}>
          </Avatar>
          <Typography component="h1" variant="h6">
            Pathways Roster
          </Typography>
          <form style={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  value={firstName}
                  label="First Name"
                  name="firstName"
                  autoComplete="firstName"
                  onChange={handleFirstNameChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="lastName"
                  name="lastName"
                  variant="outlined"
                  required
                  fullWidth
                  value={lastName}
                  id="lastName"
                  label="Last Name"
                  onChange={handleLastNameChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="caseManager"
                  value={caseManager}
                  label="Case Manager"
                  name="caseManager"
                  autoComplete="caseManager"
                  onChange={handleCaseManagerChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="date"
                  label="Date Of Entry"
                  type="date"
                  defaultValue="2023-01-01"
                  style={classes.textField}
                  InputLabelProps={{
                    shrink: true
                  }}
                  onChange={handleDateChange}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              preventDefault
              style={classes.submit}
              onClick={handleSubmit}
            >
              Save
            </Button>
  
              <div style={{display:"flex", alignItems:"center", justifyContent:"center", margin:4}}>
              <Link to="/view">View Pathways Roster</Link>
              </div>
          </form>
          <Typography style={{ margin: 7 }} variant="body1">
            Status: {message}
          </Typography>
        </div>
      </Container>
    );
  }