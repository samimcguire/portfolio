import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Navigation from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navigation />
          <Routes>
            <Route path="/" element={<Bio />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
    </div>
  );
}

export default App;
