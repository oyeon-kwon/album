import './App.css';
import Album from './Album';
import Folder from './Folder';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import logo from './image/logo.png'

function App() {
  return (
    <div className="App">
        <Router>
          <div id='nav'>
            <span className='nav-link'>
              <Link to='/'><img src={logo} className='logo' /></Link>
            </span>
          </div>
          <Routes>
            <Route path='/' element={<Album />} />
            <Route path='/:id' element={<Folder />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
