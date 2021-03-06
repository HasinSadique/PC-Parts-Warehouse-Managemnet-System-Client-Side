import React, { useState } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router";
import auth from "../../firebase.init";

const SignIn = () => {
  const [signInWithGoogle, userGoogle] = useSignInWithGoogle(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordlBlur = (event) => {
    setPassword(event.target.value);
  };

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
    // if (error) {
    //   console.log(error.message);
    // }
    event.target.reset();
  };

  if (userGoogle || user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="py-20">
      <div>
        <p
          className={`${
            error?.message ? "text-red-600 mb-10 text-center " : "hidden"
          }`}
        >
          {error?.message}
        </p>
      </div>
      <div className="w-3/4 lg:w-1/2 mx-auto bg-slate-800 py-5 px-10 rounded-2xl">
        <h1 className="text-white font-semibold text-xl text-center mb-10">
          Login using email and password
        </h1>
        <form onSubmit={handleUserSignIn} className="">
          <input
            onBlur={handleEmailBlur}
            className="block rounded-lg mx-auto mb-3 w-full px-2"
            type="Email"
            placeholder="Email"
            required
          />
          <input
            onBlur={handlePasswordlBlur}
            className="block rounded-lg mx-auto mb-6 w-full px-2"
            type="Password"
            placeholder="Password"
            required
          />
          <input
            className="block mx-auto rounded-xl text-white bg-orange-500 px-8 py-1"
            type="submit"
            value="Sign In"
          />

          <p className="text-white text-center mt-5 mb-2">
            New Joining?{" "}
            <a className="hover:text-orange-500" href="/signup">
              Create New Account
            </a>
          </p>
        </form>
      </div>
      <div className="">
        <hr className=" mt-6 border-gray-200 w-3/4 mx-auto dark:border-gray-700" />
        <h1 className="text-white text-center my-5">Or, Sign in with </h1>
        <button
          onClick={() => signInWithGoogle()}
          className=" hover:bg-slate-100 hover:scale-105 mx-auto px-4 py-1 font-semibold rounded-2xl flex gap-3 bg-white"
        >
          <img
            className="w-6 h-6"
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
          />
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
