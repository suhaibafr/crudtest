import './App.css';
import Form from './components/Form';
import StudentList from './components/StudentList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar'
import Table from './components/Table';
function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route path="/table" component={Table}/>
          <Route path="/form" component={Form}/>
          <Route exact path="/" component={StudentList}/>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
