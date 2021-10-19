import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home'
import CreateEvent from './components/CreateEvent';
import ViewEvent from './components/ViewEvent'
import Register from './components/Register'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
        {/* <ViewEvent></ViewEvent>
        <Home />
        <Register />
        <Login /> */}
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/' component={Login} />
    </Switch>
    </div>
  );
}

export default App;
