import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Navigation from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navigation />
        <Router>
          <Routes>
            <Route path="/" element={<Bio />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
