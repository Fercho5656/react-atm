import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { Footer } from './Components/Footer'
import { Login } from './Routes/Login'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Login />
        </Route>
        <Route path='/atm'>
          {/* ATM for clients*/}
        </Route>
        <Route path='/dashboard'>
          {/* Dashboard for users */}
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
