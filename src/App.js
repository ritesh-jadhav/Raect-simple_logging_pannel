import  {React, useState} from "react";
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
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </React.Fragment>
  );
}

export default App;
