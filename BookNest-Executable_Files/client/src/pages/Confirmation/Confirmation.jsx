// import React from "react";
// import { Card } from "flowbite-react";
// import { Link, useLocation } from "react-router-dom";

// export default function Confirmation() {
//   const location = useLocation();
//   const { book } = location.state;

//   return (
//     <div className="my-28 px-4 lg:px-24 flex justify-center">
//       <Card className="hover:bg-logcolor w-full max-w-md">
//         <img src={book.imageURL} alt="" className="h-65 w-40 mx-auto" />
//         <h5 className="text-3xl font-bold text-gray-900 font-alata tracking-wide dark:text-white text-center mt-4">
//           {book.bookTitle}
//         </h5>
//         <p className="font-normal text-gray-700 dark:text-gray-400 mt-2 text-justify font-hamone">
//           {book.bookDescription}
//         </p>
//         <div className="flex justify-center mt-4">
//           <Link to={`/payment/${book.id}`} state={{ book }}>
//             <button className="px-4 py-2 bg-black hover:bg-logotextcolor text-white rounded font-alata font-bold tracking-wider ">
//               Confirm Your Purchase
//             </button>
//           </Link>
//         </div>
//       </Card>
//     </div>
//   );
// }

import React from "react";
import { Card } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";

export default function Confirmation() {
  const location = useLocation();
  const { book } = location.state;

  return (
    <div className="my-28 px-4 lg:px-24 flex justify-center">
      <Card className="hover:bg-logcolor w-full max-w-md">
        <img src={book.imageURL} alt="" className="h-65 w-40 mx-auto" />
        <h5 className="text-3xl font-bold text-gray-900 font-alata tracking-wide dark:text-white text-center mt-4">
          {book.bookTitle}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 mt-2 text-justify font-hamone">
          {book.bookDescription}
        </p>
        <div className="flex justify-center mt-4">
          <Link to={`/payment/${book._id}`} state={{ book }}>
            <button className="px-4 py-2 bg-black hover:bg-logotextcolor text-white rounded font-alata font-bold tracking-wider ">
              Confirm Your Purchase
            </button>
          </Link>
        </div>
      </Card>
    </div>
  );
}

