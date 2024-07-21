// // Payment.jsx

// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";

// export default function Payment() {
//   const location = useLocation();
//   const { book } = location.state;
//   const [selectedPayment, setSelectedPayment] = useState(null);

//   const handlePayment = () => {
//     if (selectedPayment) {
//       alert("Book Purchased Successfully!");
//       window.open(book.bookPDFURL, "_blank");
//     } else {
//       alert("Please select a payment method.");
//     }
//   };

//   const paymentOptions = [
//     { name: "Google Pay", logo: "/src/assets/payments_logo/gpay.png" },
//     { name: "Phone Pay", logo: "/src/assets/payments_logo/phpay.png" },
//     { name: "Amazon Pay", logo: "/src/assets/payments_logo/amazonpay.png" },
//     { name: "Paytm", logo: "/src/assets/payments_logo/paytm.jpg" }
//   ];

//   return (
//     <div className="my-28 px-4 lg:px-24">
//       <h2 className="text-3xl font-bold text-center mb-16 z-40">
//         Choose Payment Method
//       </h2>
//       <div className="flex flex-col items-center space-y-4">
//         <div className="w-full max-w-md font-alata">
//           {paymentOptions.map((option, index) => (
//             <button
//               key={index}
//               onClick={() => setSelectedPayment(option.name)}
//               className={`w-full flex items-center px-4 py-4 mb-2 rounded-lg ${
//                 selectedPayment === option.name
//                   ? "bg-gray-300"
//                   : "bg-gray-200 hover:bg-gray-300"
//               }`}
//             >
//               <img
//                 src={option.logo}
//                 alt={option.name}
//                 className="h-10 w-10 rounded-full mr-4"
//               />
//               <span className="text-lg font-semibold tracking-wider">{option.name}</span>
//             </button>
//           ))}
//         </div>
//         <button
//           onClick={handlePayment}
//           className="px-4 py-2 bg-black hover:bg-logotextcolor text-white rounded tracking-wider font-alata"
//         >
//           Pay ₹495
//         </button>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Payment() {
  const location = useLocation();
  const { book } = location.state;
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handlePayment = () => {
    if (selectedPayment) {
      alert("Book Purchased Successfully!");
      window.open(book.bookPDFURL, "_blank");
    } else {
      alert("Please select a payment method.");
    }
  };

  const paymentOptions = [
    { name: "Google Pay", logo: "/src/assets/payments_logo/gpay.png" },
    { name: "Phone Pay", logo: "/src/assets/payments_logo/phpay.png" },
    { name: "Amazon Pay", logo: "/src/assets/payments_logo/amazonpay.png" },
    { name: "Paytm", logo: "/src/assets/payments_logo/paytm.jpg" }
  ];

  return (
    <div className="my-28 px-4 lg:px-24">
      <h2 className="text-3xl font-bold text-center mb-16 z-40">
        Choose Payment Method
      </h2>
      <div className="flex flex-col items-center space-y-4">
        <div className="w-full max-w-md font-alata">
          {paymentOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedPayment(option.name)}
              className={`w-full flex items-center px-4 py-4 mb-2 rounded-lg ${
                selectedPayment === option.name
                  ? "bg-gray-300"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              <img
                src={option.logo}
                alt={option.name}
                className="h-10 w-10 rounded-full mr-4"
              />
              <span className="text-lg font-semibold tracking-wider">{option.name}</span>
            </button>
          ))}
        </div>
        <button
          onClick={handlePayment}
          className="px-4 py-2 bg-black hover:bg-logotextcolor text-white rounded tracking-wider font-alata"
        >
          Pay ₹495
        </button>
      </div>
    </div>
  );
}
