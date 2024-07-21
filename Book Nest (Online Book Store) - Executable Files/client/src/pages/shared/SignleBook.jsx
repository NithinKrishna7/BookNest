// import React from "react";
// import { Link, useLoaderData } from "react-router-dom";

// import { Card } from "flowbite-react";

// const SignleBook = () => {
//   const { _id, bookTitle, imageURL, bookDescription } = useLoaderData();
//   //   const { bookTitle } = data;
//   //   console.log(data)
//   return (
//     <div className="mt-20">
//       {/* book details */}
//       <div className="my-28 px-4 lg:px-24 flex justify-center">
//         <Card className="hover:bg-logcolor w-full max-w-md">
//           <img src={imageURL} alt="" className="h-80 w-56 mx-auto" />
//           <h5 className="text-3xl font-bold text-gray-900 font-alata tracking-wide dark:text-white text-center mt-4">
//             {bookTitle}
//           </h5>
//           <p className="font-normal text-gray-700 dark:text-gray-400 mt-2 text-justify font-hamone">
//             {bookDescription}
//           </p>
//           <div className="flex justify-center mt-4">
//             <Link to={`/payment/${_id}`}>
//               <button className="px-4 py-2 bg-black hover:bg-logotextcolor text-white rounded font-alata font-bold tracking-wider ">
//                 Confirm Your Purchase
//               </button>
//             </Link>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default SignleBook;

// import React from "react";
// import { Link, useLoaderData } from "react-router-dom";
// import { Card } from "flowbite-react";

// const SignleBook = () => {
//   const { _id, bookTitle, imageURL, bookDescription, bookPDFURL } = useLoaderData();

//   return (
//     <div className="mt-20">
//       {/* book details */}
//       <div className="my-28 px-4 lg:px-24 flex justify-center">
//         <Card className="hover:bg-logcolor w-full max-w-md">
//           <img src={imageURL} alt="" className="h-80 w-56 mx-auto" />
//           <h5 className="text-3xl font-bold text-gray-900 font-alata tracking-wide dark:text-white text-center mt-4">
//             {bookTitle}
//           </h5>
//           <p className="font-normal text-gray-700 dark:text-gray-400 mt-2 text-justify font-hamone">
//             {bookDescription}
//           </p>
//           <div className="flex justify-center mt-4">
//             <Link
//               to={{
//                 pathname: `/payment/${_id}`,
//                 state: { bookTitle, bookDescription, imageURL, bookPDFURL }
//               }}
//             >
//               <button className="px-4 py-2 bg-black hover:bg-logotextcolor text-white rounded font-alata font-bold tracking-wider ">
//                 Confirm Your Purchase
//               </button>
//             </Link>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default SignleBook;

import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Card } from "flowbite-react";

const SignleBook = () => {
  const { _id, bookTitle, imageURL, bookDescription, bookPDFURL } =
    useLoaderData();

  return (
    <div className="mt-20">
      {/* book details */}
      <div className="my-28 px-4 lg:px-24 flex justify-center">
        <Card className="hover:bg-logcolor w-full max-w-md">
          <img src={imageURL} alt="" className="h-80 w-72 mx-auto" />
          <h5 className="text-3xl font-bold text-gray-900 font-alata tracking-wide dark:text-white text-center mt-4">
            {bookTitle}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 mt-2 text-justify font-hamone">
            {bookDescription}
          </p>
          <div className="flex justify-center mt-4">
            <Link to="/shop">
              <button className="px-4 py-2 bg-black hover:bg-logotextcolor text-white rounded font-alata font-bold tracking-wider ">
                Need this Book
              </button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SignleBook;
