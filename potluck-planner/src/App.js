import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home'
import CreateEvent from './components/CreateEvent';
import ViewEvent from './components/ViewEvent'
import LandingPage from './components/LandingPage'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <div className="App">
        {/* <ViewEvent></ViewEvent>
        <Home />
        <Register />
        <Login /> */}
    <Switch>
      <ProtectedRoute path='/dashboard' component={Home} />
      <Route path='/login' component={LandingPage} />
      <Route path='/' component={LandingPage} />
    </Switch>
    </div>
  );
}

export default App;
