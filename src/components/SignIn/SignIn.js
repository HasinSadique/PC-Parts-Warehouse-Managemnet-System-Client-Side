import React from "react";

const SignIn = () => {
  return (
    <div className="py-36">
      <div className="w-3/4 lg:w-1/2 mx-auto bg-slate-800 py-5 px-10 rounded-2xl">
        <h1 className="text-white font-semibold text-xl text-center mb-10">
          Login using email and password
        </h1>
        <form className="">
          <input
            className="block rounded-lg mx-auto mb-3 w-full px-2"
            type="Email"
            placeholder="Email"
          />
          <input
            className="block rounded-lg mx-auto mb-6 w-full px-2"
            type="Password"
            placeholder="Password"
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
        <button className=" hover:bg-slate-100 hover:scale-105 mx-auto px-4 py-1 font-semibold rounded-2xl flex gap-3 bg-white">
          <img
            className="w-6 h-6"
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
            alt=""
          />
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
