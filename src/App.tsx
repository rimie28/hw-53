import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTaskForm from "./AddTaskForm.tsx";
import Task from "./Task.tsx";



const App = () => {
  const [tasks, setTasks] = useState([
      {id: '1', text: 'Wake Up'},
      {id: '2', text: 'Wash face and brush teeth'},
      {id: '3', text: 'Go to school'},
  ]);

  const [currentTask, setCurrentTask] = useState('');

  const AddTask = () => {
      const newTask = {id: (tasks.length + 1).toString(), text: currentTask};
      const newTasks = [...tasks, newTask];
      setTasks(newTasks);
  };

  const deleteTask = (id: string) => {
      const copyTasks = tasks.filter((task) => task.id !== id);
      setTasks(copyTasks);
  }

  return (
      <div className="App">
          <AddTaskForm currentTask={currentTask}
                       setCurrentTask={setCurrentTask}
                       addTask={AddTask}
          />
          <div className="TasksDiv">
              {tasks.map(task => (
              <Task key={task.id} task={task} deleteTask={deleteTask} />
              ))}
          </div>
      </div>
  )
};

export default App
