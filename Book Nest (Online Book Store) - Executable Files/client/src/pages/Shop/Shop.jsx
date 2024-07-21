// import React, { useContext, useEffect, useState } from "react";
// import { Card, Spinner } from "flowbite-react";
// import { AuthContext } from "../../contexts/AuthProvider";
// import { Link } from "react-router-dom";

// export default function Shop() {
//   const { loading } = useContext(AuthContext);
//   const [books, setBooks] = useState([]);
//   // fetching data
//   useEffect(() => {
//     fetch("http://localhost:5000/all-books")
//       .then((res) => res.json())
//       .then((data) => setBooks(data));
//   }, [loading]);

//   // loader
//   if (loading) {
//     return (
//       <div className="text-center mt-28">
//         <Spinner aria-label="Center-aligned spinner example" />
//       </div>
//     );
//   }

//   return (
//     <div className="my-28 px-4 lg:px-24">
//       <h2 className="text-3xl font-bold text-center mb-16 z-40">
//         All Books are Available Here
//       </h2>
//       <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 ">
//         {books.map((book) => (
//           <Card className="hover:bg-logcolor">
//             <img src={book.imageURL} alt="" className="h-96" />
//             <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//               <p>{book.bookTitle}</p>
//             </h5>
//             <p className="font-normal text-gray-700 dark:text-gray-400">
//               <p className="text-justify">{book.bookDescription}</p>
//             </p>

//             <a href={book.bookPDFURL} target="_blank">
//               <button className="px-4 py-2 bg-black hover:bg-logotextcolor text-white rounded">
//                 Buy Now
//               </button>
//             </a>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }

// Shop.jsx

import React, { useContext, useEffect, useState } from "react";
import { Card, Spinner } from "flowbite-react";
import { AuthContext } from "../../contexts/AuthProvider";
import { Link } from "react-router-dom";

export default function Shop() {
  const { loading } = useContext(AuthContext);
  const [books, setBooks] = useState([]);

  // Fetching data
  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [loading]);

  // Loader
  if (loading) {
    return (
      <div className="text-center mt-28">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    );
  }

  return (
    <div className="my-28 px-4 lg:px-24">
      <h2 className="text-3xl font-bold font-alata text-center mb-16 z-40">
        All Books are Available Here
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 ">
        {books.map((book) => (
          <Card key={book.id} className="hover:bg-logcolor">
            <img src={book.imageURL} alt="" className="h-96" />
            <h5 className="text-2xl font-bold font-alata tracking-tight text-gray-900 dark:text-white">
              {book.bookTitle}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 font-hamone">
              {book.bookDescription}
            </p>

            <Link to={`/confirmation/${book.id}`} state={{ book }}>
              <button className="px-4 py-2 bg-black hover:bg-logotextcolor text-white rounded tracking-wider font-alata">
                Buy Now
              </button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}



