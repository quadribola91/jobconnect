import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar2 from "./components/Navbar/Navbar2";
import Navbar3 from "./components/Navbar/Navbar3";
import Navbar4 from "./components/Navbar/Navbar4";
import HomeContent2 from "./components/Homecontent/HomeContent2";
import SignupPage from "./components/Signup/Signup";
import LoginPage from "./components/LoginPage/Loginpage";
import Services from "./components/Service/Services";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact2 from "./components/Contact/Contact2";
import RegisterPage from "./components/Registerform/RegisterPage";
import UserProfile from "./components/UserProfile/Userprofile";
import UserProfileSearch from "./components/UserProfileSearch/UserProfileSearch";
import AuthPage from "./components/Authentication/Authentication";
import SeekerHome from "./components/SeekerHome/SeekerHome";
import RecruiterHome from "./components/RecruiterHome/RecruiterHome";
import Fill1 from "./components/RecruiterHome/Fill/Fill1";
import Fill2 from "./components/RecruiterHome/Fill/Fill2";
import Fill3 from "./components/RecruiterHome/Fill/Fill3";
import Apply1 from "./components/SeekerHome/Apply/Apply1";
import Footer from "./components/Footer/Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import Notify1 from "./components/Notify/Notify1";
import Notify2 from "./components/Notify/Notify2";
import Notify3 from "./components/Notify/Notify3";
import Message1 from "./components/Message/Message1";
import Message2 from "./components/Message/Message2";
import Message3 from "./components/Message/Message3";
import Message4 from "./components/Message/Message4";
import Submit2 from "./components/SeekerHome/Submit/Submit2";
import Submit3 from "./components/SeekerHome/Submit/Submit3";
import Submit4 from "./components/SeekerHome/Submit/Submit4";
import Submit1 from "./components/SeekerHome/Submit/Submit1";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<WithNavbar2 component={<HomeContent2 />} />}
        />
        <Route
          path="/signup"
          element={<WithNavbar2 component={<SignupPage />} />}
        />
        <Route
          path="/login"
          element={<WithNavbar2 component={<LoginPage />} />}
        />
        <Route
          path="/services"
          element={<WithNavbar2 component={<Services />} />}
        />
        <Route
          path="/about"
          element={<WithNavbar2 component={<AboutUs />} />}
        />
        <Route
          path="/contact"
          element={<WithNavbar2 component={<Contact2 />} />}
        />
        <Route
          path="/register"
          element={<WithNavbar2 component={<RegisterPage />} />}
        />
        <Route
          path="/userprofile"
          element={<WithNavbar4 component={<UserProfile />} />}
        />
        <Route
          path="/userprofilesearch"
          element={<WithNavbar3 component={<UserProfileSearch />} />}
        />
        <Route
          path="/notify1"
          element={<WithNavbar3 component={<Notify1 />} />}
        />
        <Route
          path="/notify2"
          element={<WithNavbar3 component={<Notify2 />} />}
        />
        <Route
          path="/notify3"
          element={<WithNavbar4 component={<Notify3 />} />}
        />
        <Route
          path="/message1"
          element={<WithNavbar3 component={<Message1 />} />}
        />
        <Route
          path="/message2"
          element={<WithNavbar3 component={<Message2 />} />}
        />
        <Route
          path="/message3"
          element={<WithNavbar4 component={<Message3 />} />}
        />
        <Route
          path="/message4"
          element={<WithNavbar4 component={<Message4 />} />}
        />
        <Route
          path="/auth"
          element={<WithNavbar3 component={<AuthPage />} />}
        />
        <Route
          path="/seekerhome"
          element={<WithNavbar4 component={<SeekerHome />} />}
        />
        <Route
          path="/recruiterhome"
          element={<WithNavbar3 component={<RecruiterHome />} />}
        />
        <Route path="/fill1" element={<WithNavbar3 component={<Fill1 />} />} />
        <Route path="/fill2" element={<WithNavbar3 component={<Fill2 />} />} />
        <Route path="/fill3" element={<WithNavbar3 component={<Fill3 />} />} />
        <Route
          path="/apply1"
          element={<WithNavbar3 component={<Apply1 />} />}
        />
        <Route
          path="/submit1"
          element={<WithNavbar4 component={<Submit1 />} />}
        />
        <Route
          path="/submit2"
          element={<WithNavbar4 component={<Submit2 />} />}
        />{" "}
        <Route
          path="/submit3"
          element={<WithNavbar4 component={<Submit3 />} />}
        />
        <Route
          path="/submit4"
          element={<WithNavbar4 component={<Submit4 />} />}
        />
        <Route
          path="/dashboard"
          element={<WithNavbar3 component={<Dashboard />} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

const WithNavbar2 = ({ component }) => (
  <>
    <Navbar2 />
    {component}
  </>
);

const WithNavbar3 = ({ component }) => (
  <>
    <Navbar3 />
    {component}
  </>
);

const WithNavbar4 = ({ component }) => (
  <>
    <Navbar4 />
    {component}
  </>
);

export default App;
