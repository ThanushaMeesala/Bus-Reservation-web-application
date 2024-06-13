import 'bootstrap/dist/css/bootstrap.min.css';
import { Landingpage } from './Components/Landingpage';
import AdminLogin from "./Components/AdminLogin";
import UserLogin from "./Components/UserLogin";
import Adminsignup from "./Components/Adminsignup";
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Adminhomepage from './Components/Adminhomepage';
import PageNotFound from './Components/PageNotFound';
// import AddBus from './Components/AddBus';
// import ViewBus from './Components/ViewBus';
// import Resetpassword from './Components/Resetpassword';
// import Forgotpassword from './Components/Forgotpassword';
// import Editbus from './Components/Editbus';
import Protect from './Components/Protect';
import UserSignup from './Components/UserSignup';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route to="/*" element={<PageNotFound/>}></Route>
          <Route path="/" element={<Landingpage/>}></Route>
          <Route path="/adminlogin" element={<AdminLogin/>}></Route>
          <Route path="/userlogin" element={<UserLogin/>}></Route>
          <Route path='/adminsignup' element={<Adminsignup/>}></Route>
          <Route path="/adminhomepage/*" element={<Protect Child={Adminhomepage}/>}></Route>
          {/* <Route path='/editbus/:abc' element={<Editbus/>}></Route> 
          <Route path="/addbus" element={<AddBus/>}></Route>
          <Route path="/viewbus" element={<ViewBus/>}></Route> 
          <Route path='/forgot-password' element={<Forgotpassword/>}></Route>
          <Route path="/reset-password" element={<Resetpassword/>}></Route> */}
          <Route path='/usersignup' element={<UserSignup/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
