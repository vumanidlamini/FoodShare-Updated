import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = async (event) => {
    event.preventDefault();

    try {
      const result = await axios.post(
        `http://localhost:5282/api/Email/ResetMail?email=${email}`
      );

      if (result) {
        toast.success("Reset password email sent!");
      } else {
        toast.warning("Error sending email!");
      }
    } catch (error) {
      console.error("Password reset failed:", error.response);
      toast.error("Password reset failed. Please try again later.");
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow">
              <div className="card-body">
                <h3 className="card-title text-center mb-4">Forgot Password</h3>
                <form onSubmit={handleResetPassword}>
                  <div className="mb-5">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Reset Password
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;
