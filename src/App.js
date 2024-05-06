import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pagehome from "./components/Homecontent/homecontent";
import SignupPage from "./components/Signup/Signup";
import LoginPage from "./components/LoginPage/Loginpage";
import RegisterPage from "./components/Registerform/RegisterPage";
import UserProfile from "./components/UserProfile/Userprofile";
import UserProfileSearch from "./components/UserProfileSearch/UserProfileSearch";
import Nav from "./components/Navbar/Nav";
import Navbar2 from "./components/Navbar/Navbar2";
import AuthPage from "./components/Authentication/Authentication";
import Contact from "./components/Contact/Contact";
import SeekerHome from "./components/SeekerHome/SeekerHome";
import RecruiterHome from "./components/RecruiterHome/RecruiterHome";
import Fill1 from "./components/RecruiterHome/Fill/Fill1";
import Fill2 from "./components/RecruiterHome/Fill/Fill2";
import Fill3 from "./components/RecruiterHome/Fill/Fill3";
import Apply1 from "./components/SeekerHome/Apply/Apply1";
import Footer from "./components/Footer/Footer";
import Services from "./components/Service/Services";
import HomeContent2 from "./components/Homecontent/HomeContent2";
import Contact2 from "./components/Contact/Contact2";
import ParentComponent from "./components/RecruiterHome/Fill/ParentComponent";
import AboutUs from "./components/AboutUs/AboutUs";
import Navbar3 from "./components/Navbar/Navbar3";
import Notify from "./components/Notify/Notify1";
import Notify2 from "./components/Notify/Notify2";
import Message1 from "./components/Message/Message1";
import Message2 from "./components/Message/Message2";

const App = () => {
  return (
    <Router>
      <Navbar2 />

      <Routes>
        <Route path="/" element={<HomeContent2 />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/userprofilesearch" element={<UserProfileSearch />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact2 />} />
        <Route path="/seekerhome" element={<SeekerHome />} />
        <Route path="/recruiterhome" element={<RecruiterHome />} />
        <Route path="/fill1" element={<Fill1 />} />
        <Route path="/fill2" element={<Fill2 />} />
        <Route path="/fill3" element={<Fill3 />} />
        <Route path="/apply1" element={<Apply1 />} />
      </Routes>
      <Notify />
      <Notify2 />
      <Message1 />
      <Message2 />
      <Fill1 />
      <Fill2 />
      <Fill3 />
      <RecruiterHome />
      <Apply1 />
      <SeekerHome />
      <Footer />
    </Router>
  );
};

export default App;
