import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import CreateEvent from './components/CreateEvent';
import LandingPage from './components/LandingPage'
import ProtectedRoute from './components/ProtectedRoute'
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
    <header>
      <h1>Potluck Planner</h1>
      <NavBar />
    </header>
      
    <Switch>
      <ProtectedRoute path ='/create' component={CreateEvent} />
      <ProtectedRoute path='/dashboard' component={Home} />
      <Route path='/login' component={LandingPage} />
      <Route path='/' component={LandingPage} />
    </Switch>
    </div>
  );
}

export default App;
