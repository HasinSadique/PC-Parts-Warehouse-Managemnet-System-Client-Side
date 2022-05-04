import React, { useState } from "react";
import { getAuth, verifyBeforeUpdateEmail } from "@firebase/auth";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import app from "../../firebase.init";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");

  const [createUserWithEmailAndPassword, user, sendEmailVerification] =
    useCreateUserWithEmailAndPassword(getAuth(app));

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPassBlur = (event) => {
    setConfirmPass(event.target.value);
  };

  const handleSignUplick = (event) => {
    event.preventDefault();
    if (password != confirmPass) {
      setError("Password mismatch.");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="py-32">
      <div className=" w-3/4 lg:w-1/2 mx-auto bg-slate-800 py-5 px-10 rounded-2xl">
        <h1 className="text-white font-semibold text-xl text-center mb-10">
          Sign up using email and password
        </h1>
        <form onSubmit={handleSignUplick} className="">
          <input
            onBlur={handleEmailBlur}
            className="block rounded-lg mx-auto mb-3 w-full px-2"
            type="Email"
            placeholder="Email"
            required
          />
          <input
            onBlur={handlePasswordBlur}
            className="block rounded-lg mx-auto mb-3 w-full px-2"
            type="Password"
            placeholder="Password"
            required
          />
          <input
            onBlur={handleConfirmPassBlur}
            className="block rounded-lg mx-auto mb-6 w-full px-2"
            type="Password"
            placeholder="Re-Type Password"
            required
          />
          <input
            className="block mx-auto rounded-xl text-white bg-orange-500 px-8 py-1"
            type="submit"
            value="Sign Up"
          />

          <p className="text-white text-center mt-5 mb-2">
            Already an employee?{" "}
            <a className="hover:text-orange-500" href="/signin">
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
