// import React, { useContext, useEffect, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../contexts/AuthProvider";
// import googleLogo from "../assets/google-logo.svg";
// import fbLogo from "../assets/facebook-log.svg";

// const Login = () => {
//   const [activeTab, setActiveTab] = useState("User");
//   const [ErrorMessage, setErrorMessage] = useState("");

//   const { signUpWithGmail, login } = useContext(AuthContext);

//   const location = useLocation();
//   const navigate = useNavigate();

//   const from = location.state?.from?.pathname || "/";

//   useEffect(() => {
//     const savedTab = localStorage.getItem("activeTab");
//     if (savedTab) {
//       setActiveTab(savedTab);
//     }
//   }, []);

//   const handleRegister = () => {
//     signUpWithGmail()
//       .then((result) => {
//         const user = result.user;
//         navigate(from, { replace: true });
//       })
//       .catch((error) => console.log(error));
//   };

//   const handleLogin = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const email = form.email.value;
//     const password = form.password.value;
//     login(email, password)
//       .then((result) => {
//         const user = result.user;
//         alert("Login successful!");
//         navigate(from, { replace: true });
//       })
//       .catch((error) => {
//         const errorMessage = error.message;
//         setErrorMessage(errorMessage);
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
//           <div className="max-w-md mx-auto">
//             <div>
//               <h1 className="text-3xl font-semibold font-alata">
//                 Please Login to Dashboard
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
//                 onSubmit={handleLogin}
//                 className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 font-alata"
//               >
//                 <div className="relative">
//                   <input
//                     id="email"
//                     name="email"
//                     type="text"
//                     className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600 "
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
//                   <p>
//                     {ErrorMessage ? (
//                       <span className="text-blue-500 text-sm">
//                         Email or Username is not valid!
//                       </span>
//                     ) : (
//                       ""
//                     )}
//                   </p>
//                   <p className="text-base mt-1">
//                     If you haven't an account. Please create here{" "}
//                     <Link
//                       to="/create-user"
//                       className="underline text-logotextcolor"
//                     >
//                       Sign Up
//                     </Link>
//                   </p>
//                 </div>
//                 <div className="relative">
//                   <button
//                     type="submit"
//                     className="bg-logotextcolor hover:bg-black text-white rounded px-6 py-1 tracking-wider font-alata"
//                   >
//                     Login
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>

//           <div>
//             <hr />
//             <div className="flex w-full items-center flex-col mt-5 gap-3">
//               <button onClick={handleRegister} className="block">
//                 {" "}
//                 <img
//                   src={googleLogo}
//                   alt=""
//                   className="w-12 h-12 inline-block font-alata"
//                 />
//                 Log in with Google
//               </button>
//               <button>
//                 {" "}
//                 <img
//                   src={fbLogo}
//                   alt=""
//                   className="w-10 h-10 inline-block mr-1 font-alata"
//                 />
//                 Log in with Facebook
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useContext, useEffect, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../contexts/AuthProvider";
// import googleLogo from "../assets/google-logo.svg";
// import fbLogo from "../assets/facebook-log.svg";

// const Login = () => {
//   const [activeTab, setActiveTab] = useState("User");
//   const [ErrorMessage, setErrorMessage] = useState("");

//   const { signUpWithGmail, login } = useContext(AuthContext);

//   const location = useLocation();
//   const navigate = useNavigate();

//   const from = location.state?.from?.pathname || "/";

//   useEffect(() => {
//     const savedTab = localStorage.getItem("activeTab");
//     if (savedTab) {
//       setActiveTab(savedTab);
//     }
//   }, []);

//   const handleRegister = () => {
//     signUpWithGmail()
//       .then((result) => {
//         const user = result.user;
//         navigate(from, { replace: true });
//       })
//       .catch((error) => console.log(error));
//   };

//   const handleLogin = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const email = form.email.value;
//     const password = form.password.value;
//     login(email, password)
//       .then((result) => {
//         const user = result.user;
//         // Fetch user type from database if needed
//         alert("Login successful!");
//         navigate(from, { replace: true });
//       })
//       .catch((error) => {
//         const errorMessage = error.message;
//         setErrorMessage(errorMessage);
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
//           <div className="max-w-md mx-auto">
//             <div>
//               <h1 className="text-3xl font-semibold font-alata">
//                 Please Login to Dashboard
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
//                 onSubmit={handleLogin}
//                 className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 font-alata"
//               >
//                 <div className="relative">
//                   <input
//                     id="email"
//                     name="email"
//                     type="text"
//                     className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600 "
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
//                   <p>
//                     {ErrorMessage ? (
//                       <span className="text-blue-500 text-sm">
//                         Email or Username is not valid!
//                       </span>
//                     ) : (
//                       ""
//                     )}
//                   </p>
//                   <p className="text-base mt-1">
//                     If you haven't an account. Please create here{" "}
//                     <Link
//                       to="/create-user"
//                       className="underline text-logotextcolor"
//                     >
//                       Sign Up
//                     </Link>
//                   </p>
//                 </div>
//                 <div className="relative">
//                   <button
//                     type="submit"
//                     className="bg-logotextcolor hover:bg-black text-white rounded px-6 py-1 tracking-wider font-alata"
//                   >
//                     Login
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>

//           <div>
//             <hr />
//             <div className="flex w-full items-center flex-col mt-5 gap-3">
//               <button onClick={handleRegister} className="block">
//                 {" "}
//                 <img
//                   src={googleLogo}
//                   alt=""
//                   className="w-12 h-12 inline-block font-alata"
//                 />
//                 Log in with Google
//               </button>
//               <button>
//                 {" "}
//                 <img
//                   src={fbLogo}
//                   alt=""
//                   className="w-10 h-10 inline-block mr-1 font-alata"
//                 />
//                 Log in with Facebook
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import googleLogo from "../assets/google-logo.svg";
import fbLogo from "../assets/facebook-log.svg";

const Login = () => {
  const [activeTab, setActiveTab] = useState("User");
  const [ErrorMessage, setErrorMessage] = useState("");

  const { signUpWithGmail, login } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

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

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        const user = result.user;
        alert("Login successful!");
        if (activeTab === "User") {
          navigate("/", { replace: true });
        } else if (activeTab === "Admin") {
          navigate("/admin/dashboard_admin", { replace: true });
        } else if (activeTab === "Seller") {
          navigate("/admin/dashboard_seller", { replace: true });
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
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
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-3xl font-semibold font-alata">
                Please Login to Dashboard
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
                onSubmit={handleLogin}
                className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 font-alata"
              >
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600 "
                    placeholder="Email address"
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Password"
                    required
                  />
                </div>
                <div>
                  <p>
                    {ErrorMessage ? (
                      <span className="text-blue-500 text-sm">
                        Email or Username is not valid!
                      </span>
                    ) : (
                      ""
                    )}
                  </p>
                  <p className="text-base mt-1">
                    If you haven't an account. Please create here{" "}
                    <Link
                      to="/create-user"
                      className="underline text-logotextcolor"
                    >
                      Sign Up
                    </Link>
                  </p>
                </div>
                <div className="relative">
                  <button
                    type="submit"
                    className="bg-logotextcolor hover:bg-black text-white rounded px-6 py-1 tracking-wider font-alata"
                  >
                    Login
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
                  className="w-12 h-12 inline-block font-alata"
                />
                Log in with Google
              </button>
              <button>
                {" "}
                <img
                  src={fbLogo}
                  alt=""
                  className="w-10 h-10 inline-block mr-1 font-alata"
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

export default Login;
