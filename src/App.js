import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Game from './components/game';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='questions' element={<Game />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
