import {  Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/about';
import Board from './components/board';
import BoardItem from './components/boardItem';
import Home from './components/home';
import Layout from './components/layout';

function App() {
  return (
    <div className="App">
      
        
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/board' element={<Board/>}>
              <Route path='/board/:id' element={<BoardItem/>}/>
            </Route>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
