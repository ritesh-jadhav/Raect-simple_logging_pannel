import { React,useState } from "react";
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = (props) => {
    const [enetredUsername, setenetredUsername] = useState('');
    const [enetredAge, setEnetredAge] = useState('');
    
    const addUserHandler = (event) =>
    {
        event.preventDefault();
        console.log(enetredUsername, enetredAge);
    }
    const usernameChangeHandler = (event) => {
        setenetredUsername(event.target.value);
    }
    
     const ageChangeHandler = (event) => {
        setEnetredAge(event.target.value);
     }
    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username" >Username</label>
                <input type="text" id="username" onChange={usernameChangeHandler}/>
                <label htmlFor="age" >Age(Years)</label>
                <input type="number" onChange={ageChangeHandler} id="age" />
                <Button  type="submit">AddUser</Button>
            </form>
        </Card>
    );
};
export default AddUser;