import React, { useState } from "react";
import './Form.css';

const ToDoForm = ({ addTask }) => {

    const [userInput, setUserInput] = useState();

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input class="taksInput" value={userInput} type="text" onChange={handleChange} placeholder="New task" />
            <button class="addBt" >Add new task</button>
        </form>
    );
};
export default ToDoForm;