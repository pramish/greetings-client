import React, { useState, useContext } from "react";
import "../../App.css";
import { NavBar } from "../common/navbar";
import { Footer } from "../footer/footer";
import { AuthContext } from "../../context/auth-context";
import { Spinner } from "../spinner/spinner";
import GraphQlClient from "../../graphql/api";
import { registerQuery, loginQuery } from "../../graphql/auth/auth";
const Landing = (props) => {
  const [register, setRegister] = useState(true);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const { dispatch } = useContext(AuthContext);
  const handleAuth = (e) => {
    e.preventDefault();
    if (register) {
      GraphQlClient.request(registerQuery, {
        email,
        password,
        name,
        dateOfBirth,
      })
        .then((data) => {
          setRegister(!register);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    } else {
      GraphQlClient.request(loginQuery, {
        email,
        password,
      })
        .then((data) => {
          dispatch({
            type: "LOGIN",
            auth: {
              token: data.login.token,
            },
          });
          setLoading(false);
          props.history.push("/dashboard");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      <NavBar />
      <>
        <div>
          <p className="logintext">
            {register ? "Create Your Account" : "Access your account"}
          </p>
        </div>
        <form onSubmit={handleAuth}>
          <div className="authform">
            <div className="input-field col s6 fields">
              <input
                id="email"
                type="text"
                className="validate"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email">Email Address</label>
            </div>
            <div className="input-field col s6 fields">
              <input
                id="password"
                type="password"
                className="validate"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password">Password</label>
            </div>
            {register ? (
              <>
                <div className="input-field col s6 fields">
                  <input
                    id="name"
                    type="text"
                    className="validate"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="name">Name</label>
                </div>
                <div className="input-field col s6 fields">
                  <input
                    type="date"
                    id="date"
                    className="validate"
                    required
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                  />
                  <label htmlFor="date">Date of Birth</label>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>

          <div className="submitbtn">
            {loading ? (
              <Spinner />
            ) : (
              <button
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
              >
                {register ? "Register" : "Login"}
              </button>
            )}
            <div>
              <p
                onClick={() => setRegister(() => !register)}
                className="logintext"
              >
                {register ? "Already have an account?" : "Don't Have account?"}
              </p>
            </div>
          </div>
        </form>
      </>
      <Footer />
    </div>
  );
};
export default Landing;
