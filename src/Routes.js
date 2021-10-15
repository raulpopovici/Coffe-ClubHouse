import Login from './pages/Login';
import Home from './pages/Home';
import Register from'./pages/Register';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';



export const Routes =() => {
  return (

    <Router>
      <Navbar />

      <Switch>
        <Route exact path = "/" component={Home} />
        <Route exact path = "/login" component={Login} />
        <Route exact path = "/register" component={Register} />
      </Switch>
            
    </Router>

    
  );
}

export default Routes;