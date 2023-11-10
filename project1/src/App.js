import './App.css';
import Menu from "./Components/Menu/Menu"
import Home from "./Components/Home/Home"
import Chat from "./Components/Chat/Chat"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import data from "./State.js"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Menu user={data.user} menu = {data.menu}/>
      <div className='content'>
        <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Chat/*' element={<Chat chats = {data.chats}/>}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
