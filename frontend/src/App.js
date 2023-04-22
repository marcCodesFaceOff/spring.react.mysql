import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={AddEmployee} />
        <Route exact path="/view" component={Table} />
      </Router>
    );
  }
}

export default App;
