import React, { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate=useNavigate()

  const {dispatch}=useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({type:"LOGIN",payload:user})
        navigate('/')
      })
      .catch((error) => {
        setError(true);
      });
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <form className="flex flex-col items-center " onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          className="w-[250px] h-9 px-3 py-1 m-2.5 border rounded outline-none"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="w-[250px] h-9 px-3 py-1  m-2.5 border rounded outline-none"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <button
          type="submit"
          className="w-[200px] h-8 bg-purple-700 text-white font-semibold cursor-pointer"
        >
          {" "}
          Login
        </button>
        {error && (
          <span className="text-sm text-red-600 mt-3 text-center">
            Wrong email or Password
          </span>
        )}
      </form>
    </div>
  );
};

export default Login;
