import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(2),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            left: 400,
            top: 6,
            color: (theme) => theme.palette.black,
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function Signup() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "https://findrental-r84tg.ondigitalocean.app/api/auth/register/",
        formData
      );
      console.log("Sign up successful");
      alert("Sign up successful!");
    } catch (error) {
      console.error("Sign up failed");
      alert("Sign up failed");
    }
  };

  return (
    <div className="py-4">
      <Link variant="outlined" onClick={handleClickOpen}>
        <button
          type="button"
          class="text-white bg-blue-900 hover:bg-blue-800  font-medium rounded-lg text-sm px-3.5 py-2.5 text-center"
        >
          Sign Up
        </button>
      </Link>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        className="h-screen w-full mt-16"
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        ></BootstrapDialogTitle>
        <div className="relative   flex flex-col justify-center  overflow-hidden">
          <div className="w-full p-4 my-auto bg-white rounded-md shadow-xl lg:max-w-xl">
            <h1 className="text-lg  font-semibold text-center text-blue-700">
              Sign Up
              <hr className="  border border-blue-700 w-14 font-bold ml-52 mt-2 " />
            </h1>

            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label class=" relative inline-flex px-14">
                  <input
                    className="block w-96 px-4 py-2  text-black bg-white border rounded-md placeholder:px-8 placeholder:py-2 placeholder:text-black  outline-none"
                    placeholder="First name"
                    type="text"
                    name="first_name"
                    required
                    onChange={handleInputChange}
                  />
                  <span class="absolute inset-y-0  flex p-3 items-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12Zm-8 8v-2.8q0-.85.438-1.563T5.6 14.55q1.55-.775 3.15-1.163T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20H4Z"
                      />
                    </svg>
                  </span>
                </label>
              </div>

              <div className="mb-2">
                <label class=" relative inline-flex px-14">
                  <input
                    className="block w-96 px-4 py-2  text-black bg-white border rounded-md placeholder:px-8 placeholder:py-2 placeholder:text-black  outline-none"
                    placeholder="Second name"
                    type="text"
                    name="last_name"
                    required
                    onChange={handleInputChange}
                  />
                  <span class="absolute inset-y-0  flex p-3 items-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12Zm-8 8v-2.8q0-.85.438-1.563T5.6 14.55q1.55-.775 3.15-1.163T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20H4Z"
                      />
                    </svg>
                  </span>
                </label>
              </div>

              <div className="mb-2">
                <label class=" relative inline-flex px-14">
                  <input
                    className="block w-96 px-4 py-2 text-black bg-white border rounded-md placeholder:px-8 placeholder:py-2 placeholder:text-black  outline-none focus:px-8"
                    placeholder="Enter your email"
                    type="text"
                    name="email"
                    required
                    onChange={handleInputChange}
                  />
                  <span class="absolute inset-y-0  flex p-3 items-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M13 19c0-3.31 2.69-6 6-6c1.1 0 2.12.3 3 .81V6a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h9.09c-.05-.33-.09-.66-.09-1M4 8V6l8 5l8-5v2l-8 5l-8-5m16 14v-2h-4v-2h4v-2l3 3l-3 3Z"
                      />
                    </svg>
                  </span>
                </label>
              </div>
              <div className="mb-2">
                <label class=" relative inline-flex px-14">
                  <input
                    className="block w-96 px-4 focus:px-8 py-2 mt-2 text-black bg-white border rounded-md placeholder:px-8 placeholder:py-2 placeholder:text-black  outline-none  "
                    placeholder="Enter your password"
                    type="password"
                    name="password"
                    required
                    onChange={handleInputChange}
                  />
                  <span class="absolute inset-y-0  flex p-3 items-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M8.5 2C6 2 4 4 4 6.5V7c-1.11 0-2 .89-2 2v9c0 1.11.89 2 2 2h4.72c1.46 1.29 3.34 2 5.28 2a8 8 0 0 0 8-8a8 8 0 0 0-8-8c-.34 0-.68.03-1 .08C12.76 3.77 10.82 2 8.5 2m0 2A2.5 2.5 0 0 1 11 6.5V7H6v-.5A2.5 2.5 0 0 1 8.5 4M14 8a6 6 0 0 1 6 6a6 6 0 0 1-6 6a6 6 0 0 1-6-6a6 6 0 0 1 6-6m-1 2v5l3.64 2.19l.78-1.29l-2.92-1.75V10H13Z"
                      />
                    </svg>
                  </span>
                  <span class="absolute inset-y-0  flex px-80 py-2 items-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3z"
                      />
                    </svg>
                  </span>
                </label>
              </div>
              <div className="mb-2">
                <label class=" relative inline-flex px-14">
                  <input
                    className="block w-96 px-4 focus:px-8 py-2 mt-2 text-black bg-white border rounded-md placeholder:px-8 placeholder:py-2 placeholder:text-black  outline-none  "
                    placeholder="Enter your password"
                    type="password"
                    name="password_confirmation"
                    required
                    onChange={handleInputChange}
                  />
                  <span class="absolute inset-y-0  flex p-3 items-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M8.5 2C6 2 4 4 4 6.5V7c-1.11 0-2 .89-2 2v9c0 1.11.89 2 2 2h4.72c1.46 1.29 3.34 2 5.28 2a8 8 0 0 0 8-8a8 8 0 0 0-8-8c-.34 0-.68.03-1 .08C12.76 3.77 10.82 2 8.5 2m0 2A2.5 2.5 0 0 1 11 6.5V7H6v-.5A2.5 2.5 0 0 1 8.5 4M14 8a6 6 0 0 1 6 6a6 6 0 0 1-6 6a6 6 0 0 1-6-6a6 6 0 0 1 6-6m-1 2v5l3.64 2.19l.78-1.29l-2.92-1.75V10H13Z"
                      />
                    </svg>
                  </span>
                  <span class="absolute inset-y-0  flex px-80 py-2 items-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3z"
                      />
                    </svg>
                  </span>
                </label>
              </div>
              <div>
                <Link
                  to="#"
                  className="text-xs text-blue-700 hover:underline py-2 px-14"
                >
                  Forget Password?
                </Link>
              </div>

              <div className=" inline-flex">
                <div className="mb-2">
                  <label class=" relative inline-flex px-14">
                    <span class="absolute inset-y-0  ml-28 flex  items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M8.5 2C6 2 4 4 4 6.5V7c-1.11 0-2 .89-2 2v9c0 1.11.89 2 2 2h4.72c1.46 1.29 3.34 2 5.28 2a8 8 0 0 0 8-8a8 8 0 0 0-8-8c-.34 0-.68.03-1 .08C12.76 3.77 10.82 2 8.5 2m0 2A2.5 2.5 0 0 1 11 6.5V7H6v-.5A2.5 2.5 0 0 1 8.5 4M14 8a6 6 0 0 1 6 6a6 6 0 0 1-6 6a6 6 0 0 1-6-6a6 6 0 0 1 6-6m-1 2v5l3.64 2.19l.78-1.29l-2.92-1.75V10H13Z"
                          className="text-white"
                        />
                      </svg>
                    </span>
                    <button
                      className="h-8  w-40   text-white  bg-blue-700 rounded-md outline-none"
                      type="submit"
                    >
                      Signup
                    </button>
                  </label>
                </div>

                <div className="mb-2">
                  <label class=" relative inline-flex">
                    <span class="absolute inset-y-0  ml-24 flex  items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M8.5 2C6 2 4 4 4 6.5V7c-1.11 0-2 .89-2 2v9c0 1.11.89 2 2 2h4.72c1.46 1.29 3.34 2 5.28 2a8 8 0 0 0 8-8a8 8 0 0 0-8-8c-.34 0-.68.03-1 .08C12.76 3.77 10.82 2 8.5 2m0 2A2.5 2.5 0 0 1 11 6.5V7H6v-.5A2.5 2.5 0 0 1 8.5 4M14 8a6 6 0 0 1 6 6a6 6 0 0 1-6 6a6 6 0 0 1-6-6a6 6 0 0 1 6-6m-1 2v5l3.64 2.19l.78-1.29l-2.92-1.75V10H13Z"
                          className="text-blue-700"
                        />
                      </svg>
                    </span>
                    <button
                      className="  h-8 w-40   text-white border bg-white rounded-md outline-none"
                      type="submit"
                    >
                      Login
                    </button>
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </BootstrapDialog>
    </div>
  );
}