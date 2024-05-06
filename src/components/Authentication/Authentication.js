import React, { useState } from "react";
import SignupPage from "../Signup/Signup";
import LoginPage from "../LoginPage/Loginpage";

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(true);

  const toggleAuthComponent = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <div className="w-full max-w-md items-center bg-blue-500 py-3 px-10 rounded-2xl">
        <div className="flex justify-center items-center">
          <h1>
            {isSignup ? "Already have an account?" : "Don't have an account?"}
            <span className="ml-1">
              <button onClick={toggleAuthComponent}>
                {isSignup ? "Login" : "Signup"}
              </button>
            </span>
          </h1>
        </div>
        {isSignup ? <SignupPage /> : <LoginPage />}
        <div className="text-white"></div>
      </div>
    </div>
  );
};

export default AuthPage;
