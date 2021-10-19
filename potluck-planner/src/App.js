import logo from './logo.svg';
import './App.css';
import CreateEvent from './components/CreateEvent';
import ViewEvent from './components/ViewEvent'
import Register from './components/Register'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
        <ViewEvent></ViewEvent>
        <Register />
        <Login />
    </div>
  );
}

export default App;
