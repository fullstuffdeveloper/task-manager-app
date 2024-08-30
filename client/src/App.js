import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks on component mount
  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     console.log("Fetching tasks...");
  //     try {
  //       const response = await axios.get("http://localhost:5001/api/tasks");
  //       console.log("Fetched tasks:", response.data);
  //       setTasks(response.data);
  //     } catch (error) {
  //       console.error("Error fetching tasks:", error);
  //     }
  //   };

  //   fetchTasks();
  // }, []);

  // Add task by making an API call
  // const addTask = async (task) => {
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5001/api/tasks",
  //       task
  //     );
  //     setTasks([...tasks, response.data]);
  //   } catch (error) {
  //     console.error("Error adding task:", error);
  //   }
  // };

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), status: "pending" }]);
  };

  // Delete task by making an API call
  // const deleteTask = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:5001/api/tasks/${id}`);
  //     setTasks(tasks.filter((task) => task._id !== id));
  //   } catch (error) {
  //     console.error("Error deleting task:", error);
  //   }
  // };

  // // Update task status by making an API call
  // const updateTask = async (id) => {
  //   console.log("Updating task with ID:", id);
  //   const taskToUpdate = tasks?.find((task) => task._id === id);
  //   const updatedTask = {
  //     ...taskToUpdate,
  //     status: taskToUpdate.status === "pending" ? "completed" : "pending",
  //   };

  //   try {
  //     const response = await axios.put(
  //       `http://localhost:5001/api/tasks/${id}`,
  //       updatedTask
  //     );
  //     setTasks(tasks.map((task) => (task._id === id ? response.data : task)));
  //   } catch (error) {
  //     console.error("Error updating task:", error);
  //   }
  // };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "pending" ? "completed" : "pending",
            }
          : task
      )
    );
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <main style={{ flex: 1 }}>
        <TaskForm onAddTask={addTask} />
        <TaskList tasks={tasks} onDelete={deleteTask} onUpdate={updateTask} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
