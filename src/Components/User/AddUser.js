import { React, useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enetredUsername, setEnetredUsername] = useState("");
  const [enetredAge, setEnetredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enetredUsername.trim().length === 0 || enetredAge.trim().length === 0) {
     setError({
       title: 'Invalid input',
       message: 'Please enter a valid name and age (non-empty values). '
     })
     return;
   }
    if (+enetredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).'
      })
      return;
    }
    props.onAddUser(enetredUsername, enetredAge);
    setEnetredUsername("");
    setEnetredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnetredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnetredAge(event.target.value);
  };

  const errorHandler = () =>{
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enetredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age(Years)</label>

          <input
            type="number"
            onChange={ageChangeHandler}
            id="age"
            value={enetredAge}
          />

          <Button type="submit">AddUser</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
