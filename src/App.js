import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Navigation from './components/Navigation'
import Home from './components/Home'
import Classrooms from './containers/Classrooms';
import Classroom from './containers/Classroom';
import StudentForm from './containers/StudentForm';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="main-container">
      <Router>
        <Navigation />
      <div className="App">
        <Switch>
        <Route exact path="/" component={Home} />  
        <Route exact path="/classrooms" component={Classrooms} />
        <Route exact path="/classrooms/new" component={StudentForm} />
        <Route path="/classrooms/:id" component={Classroom}/> 
        </Switch>
      </div>
    </Router>
  </div>
  );
}

export default App;
