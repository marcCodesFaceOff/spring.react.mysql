import React, { Component } from "react";
import AddPerson from "./Components/AddPerson";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Table from "./Components/Table";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<AddPerson />} />
          <Route path="/view" element={<Table />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
