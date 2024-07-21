// import React, { useContext, useEffect, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../contexts/AuthProvider";
// import googleLogo from "../assets/google-logo.svg";
// import fbLogo from "../assets/facebook-log.svg";

// const Signup = () => {
//   const [activeTab, setActiveTab] = useState("User");
//   const [ErrorMessage, setErrorMessage] = useState("");

//   const { signUpWithGmail, createUser } = useContext(AuthContext);

//   const location = useLocation();
//   const navigate = useNavigate();

//   const from = location.state?.from?.pathname || "/login";

//   useEffect(() => {
//     const savedTab = localStorage.getItem("activeTab");
//     if (savedTab) {
//       setActiveTab(savedTab);
//     }
//   }, []);

//   // login with google
//   const handleRegister = () => {
//     signUpWithGmail()
//       .then((result) => {
//         const user = result.user;
//         navigate(from, { replace: true });
//       })
//       .catch((error) => console.log(error));
//   };

//   // login with email password
//   const handleSignup = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const email = form.email.value;
//     const password = form.password.value;
//     createUser(email, password)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         alert("Sign up Successful");
//         navigate(from, { replace: true });
//       })
//       .catch((error) => {
//         const errorMessage = error.message;
//         console.log(errorMessage);
//       });
//   };

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//     localStorage.setItem("activeTab", tab);
//     setTimeout(() => {
//       window.location.reload();
//     }, 0);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
//       <div className="relative py-3 sm:max-w-xl sm:mx-auto">
//         <div className="absolute inset-0 bg-gradient-to-r from-logcolor to-spancolor shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
//         <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
//           <div className="max-w-md mx-auto font-alata">
//             <div>
//               <h1 className="text-3xl font-semibold">
//                 Please Create An Account
//               </h1>
//             </div>
//             <div className="mt-4">
//               <div className="flex justify-center">
//                 <button
//                   className={`px-4 py-2 ${
//                     activeTab === "User"
//                       ? "bg-logotextcolor text-white"
//                       : "bg-gray-200"
//                   } rounded-l`}
//                   onClick={() => handleTabChange("User")}
//                 >
//                   User
//                 </button>
//                 <button
//                   className={`px-4 py-2 ${
//                     activeTab === "Admin"
//                       ? "bg-logotextcolor text-white"
//                       : "bg-gray-200"
//                   }`}
//                   onClick={() => handleTabChange("Admin")}
//                 >
//                   Admin
//                 </button>
//                 <button
//                   className={`px-4 py-2 ${
//                     activeTab === "Seller"
//                       ? "bg-logotextcolor text-white"
//                       : "bg-gray-200"
//                   } rounded-r`}
//                   onClick={() => handleTabChange("Seller")}
//                 >
//                   Seller
//                 </button>
//               </div>
//             </div>
//             <div className="divide-y divide-gray-200 mt-4">
//               <form
//                 onSubmit={handleSignup}
//                 className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
//               >
//                 <div className="relative">
//                   <input
//                     id="email"
//                     name="email"
//                     type="text"
//                     className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
//                     placeholder="Email address"
//                     required
//                   />
//                 </div>
//                 <div className="relative">
//                   <input
//                     id="password"
//                     name="password"
//                     type="password"
//                     className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
//                     placeholder="Password"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <p className="text-base">
//                     If you have an account. Please{" "}
//                     <Link to="/login" className="underline text-logotextcolor">
//                       Login Now
//                     </Link>{" "}
//                     here
//                   </p>
//                 </div>
//                 <div className="relative">
//                   <button
//                     type="submit"
//                     className="bg-logotextcolor hover:bg-black text-white rounded px-6 py-1"
//                   >
//                     Sign up
//                   </button>
//                 </div>
//               </form>
//             </div>

//             {/* social login */}
//             <div>
//               <hr />
//               <div className="flex w-full items-center flex-col mt-5 gap-3">
//                 <button onClick={handleRegister} className="block">
//                   <img
//                     src={googleLogo}
//                     alt="Google logo"
//                     className="w-12 h-12 inline-block"
//                   />
//                   Log in with Google
//                 </button>
//                 <button>
//                   <img
//                     src={fbLogo}
//                     alt="Facebook logo"
//                     className="w-10 h-10 inline-block mr-1 tracking-wider"
//                   />
//                   Log in with Facebook
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import googleLogo from "../assets/google-logo.svg";
import fbLogo from "../assets/facebook-log.svg";

const Signup = () => {
  const [activeTab, setActiveTab] = useState("User");
  const [ErrorMessage, setErrorMessage] = useState("");

  const { signUpWithGmail, createUser } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/login";

  useEffect(() => {
    const savedTab = localStorage.getItem("activeTab");
    if (savedTab) {
      setActiveTab(savedTab);
    }
  }, []);

  const handleRegister = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password, activeTab)
      .then((userCredential) => {
        alert("Sign up Successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(error.message);
        setErrorMessage(errorMessage);
      });
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    localStorage.setItem("activeTab", tab);
    setTimeout(() => {
      window.location.reload();
    }, 0);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-logcolor to-spancolor shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto font-alata">
            <div>
              <h1 className="text-3xl font-semibold">
                Please Create An Account
              </h1>
            </div>
            <div className="mt-4">
              <div className="flex justify-center">
                <button
                  className={`px-4 py-2 ${
                    activeTab === "User"
                      ? "bg-logotextcolor text-white"
                      : "bg-gray-200"
                  } rounded-l`}
                  onClick={() => handleTabChange("User")}
                >
                  User
                </button>
                <button
                  className={`px-4 py-2 ${
                    activeTab === "Admin"
                      ? "bg-logotextcolor text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => handleTabChange("Admin")}
                >
                  Admin
                </button>
                <button
                  className={`px-4 py-2 ${
                    activeTab === "Seller"
                      ? "bg-logotextcolor text-white"
                      : "bg-gray-200"
                  } rounded-r`}
                  onClick={() => handleTabChange("Seller")}
                >
                  Seller
                </button>
              </div>
            </div>
            <div className="divide-y divide-gray-200 mt-4">
              <form
                onSubmit={handleSignup}
                className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
              >
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                    required
                  />
                </div>
                <div>
                  <p className="text-base">
                    If you have an account. Please{" "}
                    <Link to="/login" className="underline text-logotextcolor">
                      Login Now
                    </Link>{" "}
                    here
                  </p>
                </div>
                <div className="relative">
                  <button
                    type="submit"
                    className="bg-logotextcolor hover:bg-black text-white rounded px-6 py-1"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div>
            <hr />
            <div className="flex w-full items-center flex-col mt-5 gap-3">
              <button onClick={handleRegister} className="block">
                {" "}
                <img
                  src={googleLogo}
                  alt=""
                  className="w-12 h-12 inline-block"
                />
                Log in with Google
              </button>
              <button>
                {" "}
                <img
                  src={fbLogo}
                  alt=""
                  className="w-10 h-10 inline-block mr-1 tracking-wider"
                />
                Log in with Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
