import { useState } from "react";
import Card from "../UI/Card/Card";
import Modal from "../UI/Modal/Modal";
import './AddUser.css';

const AddUser = props => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const nameChangeHandler = event => {
        setEnteredName(event.target.value);
    };

    const ageChangeHandler = event => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
       setError(null);
    };

    const submitHandler = event => {
        event.preventDefault();
        if(enteredName.trim().length === 0 || enteredAge.trim().length === 0){
            setError('Please enter name and age!');
            return;
        }

        const userData = {
            id: Date.now().toString(),
            name: enteredName,
            age: enteredAge
        }
        props.onUserAdd(userData);
        setEnteredName('');
        setEnteredAge('');
    };

    return (
      <div>
        <Card className="add-user__wrapper">
          <form onSubmit={submitHandler}>
            <div className="add_user__controls">
              <div className="add_user__control">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={enteredName}
                  onChange={nameChangeHandler}
                />
              </div>
              <div className="add_user__control">
                <label htmlFor="name">Age:</label>
                <input
                  type="number"
                  id="age"
                  value={enteredAge}
                  onChange={ageChangeHandler}
                />
              </div>
            </div>
            <div className="add_user__actions">
              <button className="submit-btn" type="submit">
                Add User
              </button>
            </div>
          </form>
        </Card>
        <Modal message={error} onConfirm={errorHandler}/>
      </div>
    );
}

export default AddUser;