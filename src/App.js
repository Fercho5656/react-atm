import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { Footer } from './Components/Footer'
import { UsersProvider } from './Context/UsersContext';
import { Dashboard } from './Routes/Dashboard';
import { Atm } from './Routes/Atm'
import { Login } from './Routes/Login'
import { NotFound } from './Routes/NotFound'

function App() {
  return (
    <UsersProvider>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route exact path='/atm'>
            <Atm />
          </Route>
          <Route exact path='/dashboard'>
            <Dashboard />
          </Route>
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </UsersProvider>
  );
}

export default App;
