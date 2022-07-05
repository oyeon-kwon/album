import './App.css';
import Album from './Album';
import Folder from './Folder';
import ImageModal from './ImageModal';
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
            <Route path='/album=:id' element={<Folder />} />
            <Route path='/album=:id/photo=:id' element={<ImageModal />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
