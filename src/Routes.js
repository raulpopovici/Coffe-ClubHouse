import Login from './pages/Login';
import Home from './pages/Home';
import Register from'./pages/Register';
import Store from './pages/Store'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';



export const Routes =() => {
  return (

    <Router>
      <Navbar />

      <Switch>
        <Route exact path = "/" component={Home} />
        <Route exact path = "/login" component={Login} />
        <Route exact path = "/register" component={Register} />
        <Route exact path = "/store" component={Store} />
      </Switch>
       <Footer/>     
    </Router>

    
  );
}

export default Routes;