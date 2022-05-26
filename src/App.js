import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import RequireAuth from './Login/RequireAuth';
import SignUp from './Login/SignUp';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import ShowAllCameraProducts from './Pages/Home/ShowAllCameraProducts';
import ShowAllLaptopProducts from './Pages/Home/ShowAllLaptopProducts';
import ShowAllMobilePhone from './Pages/Home/ShowAllMobilePhone';
import MyOrder from './Pages/MyOrder/MyOrder';
import Blogs from './Pages/Share/Blogs';
import Navbar from './Pages/Share/Navbar';
import NotFound from './Pages/Share/NotFound';

function App() {
  return (
    <div >
      <div className='sticky top-0 z-50'>
        <Navbar></Navbar>
      </div>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/showAllCameraTools' element={<ShowAllCameraProducts />}></Route>
        <Route path='/showAllLaptopTools' element={<ShowAllLaptopProducts />}></Route>
        <Route path='/showAllMobilePhone' element={<ShowAllMobilePhone />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/myOrder' element={<MyOrder />}></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
