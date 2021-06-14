import  {React, useState,Fragment} from "react";
import AddUser from "./Components/User/AddUser";
import UserList from "./Components/User/UserList";

function App() {
  const [usersList, setUserList] = useState([]);

  const addUserHandler = (uName,uAge) => {
    setUserList((prevState) =>{
       return[...prevState,{name: uName , age : uAge , id : Math.random().toString()}];
    })
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </Fragment>
  );
}

export default App;
