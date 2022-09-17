import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Game from './components/game';
import Home from './components/home';
import QuestionForm from './components/questionForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='questions'>
          <Route path=':id' element={<QuestionForm/>}/>
          <Route index element={<Game />} />
        </Route>
      </Routes>
      <Game />
      </BrowserRouter>
    </div>
  );
}

export default App;
