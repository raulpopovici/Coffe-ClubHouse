import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';



function App() {
  return (

    <Router>
      <Navbar />

      <Switch>
        <Route exact path = "/home" component={Home} />
        <Route exact path = "/login" component={Login} />
      </Switch>
            
    </Router>

    
  );
}

export default App;
