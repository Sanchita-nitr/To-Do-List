import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div
      style={{
        padding: 20,
        maxWidth: 400,
        margin: "auto",
        backgroundColor: "#00000080",
        borderStyle: "solid",
        borderColor: "#edc5ff",
        borderWidth: 1.5,
        borderRadius: 10,
      }}
    >
      <TextField
        label="New Task"
        variant="outlined"
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="input"
      />
      <Button
        className="task"
        onClick={addTask}
        variant="contained"
        style={{
          marginTop: 10,
          width: "100%",
          backgroundColor: " skyblue",
          color: "black",
        }}
      >
        Add Task
      </Button>
      <List>
        {tasks.map((task, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton
                style={{ color: "red" }}
                className="delete"
                edge="end"
                aria-label="delete"
                onClick={() => removeTask(index)}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={task} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TodoList;
