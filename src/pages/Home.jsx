import { useEffect } from "react";
import { useAuthContext } from "../contexts/auth/AuthContext";
import { myBooks } from "../services/book";
import { useNavigate } from 'react-router-dom';

export default function () {  
  const { user } = useAuthContext();
  const navigate = useNavigate()

  return (
    <div>
        {user
        ? `Logged in With ${user.firstName} ${user.lastName}`
        : "Not Logged In"}
      <h1> LibroSphere </h1>
      <h3> Home page </h3>
      {user ?  
      <button onClick={logout}>Logout</button> : <button onClick={() => {
        navigate("/login");
      }}>Login</button>}
    </div>
  );
}
