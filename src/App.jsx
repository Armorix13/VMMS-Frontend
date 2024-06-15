import Navbar from "./components/Navbar/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/Aboutus/Aboutus";
import Contact from "./components/Contact/Contact";
import "./App.css";
import Jobs from "./components/Jobs/Jobs";
import Fotter from "./components/Fotter/Fotter";
import Auth from "./components/auth/auth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Admin from "./components/Admin/Admin";
import User from "./components/User/User";
import Contactus from "./components/Contactus/Contactus";
import Addjob from "./components/AddJob/Addjob";
import UserApplied from "./components/UserApplied/UserApplied";
import MyApplication from "./components/MyApplication/MyApplication";

function App() {
  const token = localStorage.getItem("token");
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Navbar />
      <div className="pages min-h-[100vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/signup" element={<Auth />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/user" element={<User />} />
          <Route path="/contactedus" element={<Contactus />} />
          <Route path="/addJob" element={<Addjob />} />
          <Route path="/userForm" element={<UserApplied />} />
          <Route path="/myApplication" element={<MyApplication />} />
        </Routes>
      </div>
      <Fotter />
    </>
  );
}

export default App;
