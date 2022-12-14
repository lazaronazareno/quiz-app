import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Game from './components/game';
import Home from './components/home';
import Ranking from './components/ranking';

function App() {
  return (
    <main className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='questions' element={<Game />} />
        <Route path='ranking' element={<Ranking />} />
      </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
