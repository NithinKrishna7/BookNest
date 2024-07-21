import React, { useContext, useState } from "react";
import { Button, Modal } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Logout = () => {
  const [openModal, setOpenModal] = useState("");
  const props = { openModal, setOpenModal };

  //   use context
  const { logOut } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleSignOut = () => {
    // console.log("sign out");
    logOut()
      .then(() => {
        // Sign-out successful.
        alert("Sign-out successful!!!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <Button
        onClick={() => props.setOpenModal("default")}
        className="bg-red-700"
      >
        Click here to Logout
      </Button>
      <Modal
        show={props.openModal === "default"}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Are you sure you want to logout from your account ?
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/" onClick={handleSignOut}>
            <Button
              onClick={() => props.setOpenModal(undefined)}
              className="bg-green-500 hover:text-black"
            >
              Yes, I want to sign out!
            </Button>
          </Link>
          <Link to="/admin/dashboard">
            <Button
              onClick={() => props.setOpenModal(undefined)}
              className="bg-red-600 hover:text-black"
            >
              No
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Logout;
