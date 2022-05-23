import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Share/Navbar';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </div>
  );
}

export default App;
