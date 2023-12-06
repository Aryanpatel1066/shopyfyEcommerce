import { NavLink } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../pages/Login.css";
export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submited, setSubmited] = useState(false);
  // const handleLogin = () => {
  //   setSubmited(true)
  // };
  const handleLogin = (isGuest = false) => {
    if (isGuest) {
      toast.success("Login successfully", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setName("aryanpatel");
      setEmail("aryanpatel1248@gmail.com");
    } else if (!name.trim()) {
      toast.error("name can not be empty", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    } else if (!isGuest && password.length < 8) {
      // toast.error("Password should be at least 8 characters long");
      toast.error("Password should be at least 8 characters long", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    toast.success("Login successfully", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setSubmited(true);
  };

  return (
    <>
      {" "}
      <ToastContainer />
      <main>
        <div className="outerFormContainer">
          {!submited ? (
            <form>
              <h1>Login page</h1>
              <label>
                Name:{" "}
                <input
                  value={name}
                  type="text"
                  placeholder="aryanpatel"
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="firstInput"
                />
              </label>
              <br />
              <label>
                Email:{" "}
                <input
                  value={email}
                  id="inputEmail"
                  type="email"
                  placeholder="test@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <br />
              <label>
                Password:
                <input
                  value={password}
                  type={showPassword ? "text" : "password"}
                  placeholder="******"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className={`eye-icon ${showPassword ? "" : "strike"}`}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "👁️" : "👁️"}
                </button>
              </label>
              <br />
              <button className="login" onClick={() => handleLogin()}>
                Login
              </button>
              <button className="login" onClick={() => handleLogin(true)}>
                Login as guest
              </button>
            </form>
          ) : (
            <div>
              <h1>Name: {name}</h1>
              <h1>Email: {email}</h1>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
