import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import RequireAuth from './Login/RequireAuth';
import SignUp from './Login/SignUp';
import About from './Pages/About/About';
import AddAReview from './Pages/AddAReview/AddAReview';
import AddNewProduct from './Pages/Dashboard/AddNewProduct';
import AllUser from './Pages/Dashboard/AllUser';
import Booking from './Pages/Dashboard/Booking';
import Bookings from './Pages/Dashboard/Bookings';
import Dashboard from './Pages/Dashboard/Dashboard';
import History from './Pages/Dashboard/History';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import MyReview from './Pages/Dashboard/MyReview';
import Home from './Pages/Home/Home';
import ShowAllCameraProducts from './Pages/Home/ShowAllCameraProducts';
import ShowAllLaptopProducts from './Pages/Home/ShowAllLaptopProducts';
import ShowAllMobilePhone from './Pages/Home/ShowAllMobilePhone';
import MyOrder from './Pages/MyOrder/MyOrder';
import MyProfile from './Pages/MyProfile/MyProfile';
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
        <Route path='/about' element={<About />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/myOrder' element={<MyOrder />}></Route>
        <Route path='/addAReview' element={
          <RequireAuth>
            <AddAReview />
          </RequireAuth>
        }></Route>
        <Route path='/myProfile' element={
          <RequireAuth>
            <MyProfile />
          </RequireAuth>
        }></Route>
        <Route path='/booking' element={
          <RequireAuth>
            <Booking />
          </RequireAuth>
        }></Route>

        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<Bookings />} />
          <Route path='review' element={<MyReview />} />
          <Route path='history' element={<History />} />
          <Route path='users' element={<AllUser />} />
          <Route path='addNewProduct' element={<AddNewProduct />} />
          <Route path='manageProduct' element={<ManageProduct />} />

        </Route>


        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
