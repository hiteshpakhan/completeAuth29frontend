import React, { useContext, useEffect } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;  //this is very important
import AuthContext from "../context/AuthContext";

const Users = () => {
  // const [user, setUser] = useState("")  //here we will be removing this because now we are using the context to store this globaly
  
  const {user, setUser} = useContext(AuthContext)
  
  const sendRequest = async () => {
    const res = await axios.get("http://localhost:5000/api/user", {
      withCredentials: true,  // here we have given the option to this get method withCredentials as true
    });
    const data = await res.data;
    setUser(data.message);  //because we have send the user data in message object
  };

  useEffect(() => {
      sendRequest();
  }, []);

  return (
    <div className="flex justify-center items-center h-[80vh]">
      {user && <h1>Welcome {user.name}</h1>}
    </div>
  )
}

export default Users