import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import User from './components/User';

function App() {


  return (
    <Router>
      <div className="container mt-5">
        <div className="btn-group">
          <NavLink to="/" className="btn btn-dark mt-5" activeClassName="active">Inicio</NavLink>
          <NavLink to="/about" className="btn btn-dark mt-5" activeClassName="active">Nosotros</NavLink>
          <NavLink to="/contacto" className="btn btn-dark mt-5" activeClassName="active">Contacto</NavLink>

        </div> 
        <hr />
        <Switch>
          <Route path="/about/:id">
            <User />
          </Route>
          <Route path="/contact">
            <Contacto />
          </Route>
          <Route path="/about">
            <Nosotros />
          </Route>
          <Route path="/">
            <Inicio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
