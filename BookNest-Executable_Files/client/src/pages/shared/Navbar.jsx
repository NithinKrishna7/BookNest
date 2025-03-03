import { useContext } from "react";
import { useEffect, useState } from "react";

// import icons from react icons
import { FaXmark, FaBars, FaBarsStaggered, FaBlog } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const { user } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Blog", path: "/blog" },
    { link: "Profile", path: "/admin/dashboard" },
  ];
  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav
        className={`py-4 lg:px-24 px-4 ${
          isSticky ? "sticky top-0 left-0 right-0 bg-logcolor" : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <Link
            to="/"
            className="text-3xl  font-hamone font-bold text-logotextcolor flex items-center gap-2"
          >
            <img
              src="src/assets/logo.png"
              className="w-[5rem] h-[5rem]"
              alt="logo"
            />
            BookNest
          </Link>

          <ul className="md:flex space-x-12 hidden navitems ">
            {navItems.map(({ link, path }) => (
              <Link
                key={link}
                to={path}
                className="link block text-lg  font-belanosima cursor-pointer uppercase text-black hover:text-logotextcolor"
              >
                {link}
              </Link>
            ))}
          </ul>

          <div className="space-x-12 hidden lg:flex items-center ">
            <button>
              {" "}
              <FaBarsStaggered className="w-5 hover:text-logotextcolor" />
            </button>
            {/* {<Link to="/login" className="hover:text-logotextcolor">{user ? user.email : " LOGIN"}</Link>} */}
            {user ? (
              <Link
                to="/admin/dashboard"
                className="hover:text-logotextcolor font-belanosima text-xl font-semibold"
              >
                {user.email.split(/[0-9]/)[0].charAt(0).toUpperCase() +
                  user.email.split(/[0-9]/)[0].slice(1).toUpperCase()}
              </Link>
            ) : (
              <Link
                to="/login"
                className="hover:text-logotextcolor font-belanosima text-lg font-semibold"
              >
                {"LOGIN"}
              </Link>
            )}
          </div>

          <Link to="/logout">
            <FiLogOut className="text-2xl hover:text-logotextcolor" />
          </Link>

          {/* menu btn, visible on mobile screen */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 text-black" />
              ) : (
                <FaBarsStaggered className="h-5 w-5 text-black" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-logotextcolor ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <a
              href={path}
              key={link}
              onClick={toggleMenu}
              className="block  text-white hover:text-gray-500"
            >
              {link}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

// import React, { useContext, useEffect, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../contexts/AuthProvider";
// import { FaXmark, FaBarsStaggered } from "react-icons/fa6";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);

//   const { user } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setIsSticky(true);
//       } else {
//         setIsSticky(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const navItems = [
//     { link: "Home", path: "/" },
//     { link: "About", path: "/about" },
//     { link: "Shop", path: "/shop" },
//     { link: "Blog", path: "/blog" },
//     { link: "Profile", path: "/admin/dashboard" },
//   ];

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleLogout = () => {
//     // Perform logout logic
//     // Redirect to login page after logout
//     navigate("/login");
//   };

//   return (
//     <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
//       <nav
//         className={`py-4 lg:px-24 px-4 ${
//           isSticky ? "sticky top-0 left-0 right-0 bg-logcolor" : ""
//         }`}
//       >
//         <div className="flex justify-between items-center text-base gap-8">
//           <Link
//             to="/"
//             className="text-3xl  font-hamone font-bold text-logotextcolor flex items-center gap-2"
//           >
//             <img
//               src="src/assets/logo.png"
//               className="w-[5rem] h-[5rem]"
//               alt="logo"
//             />
//             BookNest
//           </Link>

//           <ul className="md:flex space-x-12 hidden navitems ">
//             {navItems.map(({ link, path }) => (
//               <Link
//                 key={link}
//                 to={path}
//                 className="link block text-lg  font-belanosima cursor-pointer uppercase text-black hover:text-logotextcolor"
//               >
//                 {link}
//               </Link>
//             ))}
//           </ul>

//           <div className="space-x-12 hidden lg:flex items-center ">
//             <button>
//               {" "}
//               <FaBarsStaggered className="w-5 hover:text-logotextcolor" />
//             </button>
//             {user && user.type === "Admin" ? (
//               <Link
//                 to="/admin/dashboard"
//                 className="hover:text-logotextcolor font-belanosima text-lg font-semibold"
//               >
//                 {user.email}
//               </Link>
//             ) : (
//               <Link
//                 to="/login"
//                 className="hover:text-logotextcolor font-belanosima text-lg font-semibold"
//               >
//                 {"LOGIN"}
//               </Link>
//             )}
//           </div>

//           {/* menu btn, visible on mobile screen */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="text-black focus:outline-none"
//             >
//               {isMenuOpen ? (
//                 <FaXmark className="h-6 w-6 text-black" />
//               ) : (
//                 <FaBarsStaggered className="h-5 w-5 text-black" />
//               )}
//             </button>
//           </div>
//         </div>

//         <div
//           className={`space-y-4 px-4 mt-16 py-7 bg-logotextcolor ${
//             isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
//           }`}
//         >
//           {navItems.map(({ link, path }) => (
//             <Link
//               to={path}
//               key={link}
//               onClick={toggleMenu}
//               className="block text-white hover:text-gray-500"
//             >
//               {link}
//             </Link>
//           ))}
//           {user && user.type === "Admin" && (
//             <button
//               onClick={handleLogout}
//               className="block text-white hover:text-gray-500"
//             >
//               Logout
//             </button>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
