import { useEffect } from "react";
import { useAuthContext } from "../contexts/auth/AuthContext";
import { myBooks } from "../services/book";

export default function () {  
  const { user } = useAuthContext();

  return (
    <div>
        {user
        ? `Logged in With ${user.firstName} ${user.lastName}`
        : "Not Logged In"}
      <h1> Home page </h1>
      {user ?  
      <button onClick={logout}>Logout</button> : <button>Login</button>}
    </div>
  );
}
