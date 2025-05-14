import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Registration from './User/Registration';
import Userlist from './User/Userlist';
import Userprofile from './User/Userprofile';
// import Homepg from './User/Homepg';
import Login from './User/Login';
import NewLandingPage from './NewLandingPage';
// import { useNavigate } from 'react-router-dom';
import Userhome from './User/Userhome';
import Admindashboard from './Admin/Admindashboard';
import AdminNotification from './Admin/AdminNotification';
import Adminuserlist from './Admin/Adminuserlist';
import Adminviewuserprofile from './Admin/Adminviewuserprofile';
import Adminlogin from './Admin/Adminlogin';
import Userviewoneprof from './User/Userviewoneprof';

// import Navbar from './Navbar';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewLandingPage/>}/>
        {/* <Route path="/homepg" element={<Homepg/>}/> */}
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Registration/>}/>
        <Route path="/userhome" element={<Userhome/>}/>
        <Route path="/userlist" element={<Userlist/>}/>
        <Route path="/userprofile/:id" element={<Userprofile/>}/>
        <Route path="/userviewone/:id" element={<Userviewoneprof/>}/>


        <Route path="/adminlogin" element={<Adminlogin/>}/>
        <Route path="/adminhome" element={<Admindashboard/>}/>
        <Route path="/adminnotify" element={<AdminNotification/>}/>
        <Route path="/adminuserlist" element={<Adminuserlist/>}/>
        <Route path="/adminviewuser" element={<Adminviewuserprofile/>}/>


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
