import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { UserContext } from './context';
import Navbar from './components/Navbar';
import Bio from './components/Bio';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <UserContext.Provider value={{users:[{name:'Samantha', email:'samimcguire@gmail.com', password:'secret', balance:100}]}}>
        <Routes>
          <Route path="/" element={<Bio />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
