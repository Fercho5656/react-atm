import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { Footer } from './Components/Footer'
import { UsersProvider } from './Context/UsersContext';
import { Login } from './Routes/Login'

function App() {
  return (
    <UsersProvider>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route exact path='/atm'>
            {/* ATM for clients*/}
          </Route>
          <Route exact path='/dashboard'>
            {/* Dashboard for users */}
          </Route>
        </Switch>
        <Footer />
      </Router>
    </UsersProvider>
  );
}

export default App;
