import { useEffect, useState } from "react";
import"./App.css";
import AddTask from "./Components/AddTask";
import Header from "./Components/Header";
import ShowTask from "./Components/ShowTask";
export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "gOne");

    
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("taskList")) || []
  );
  const [task, setTask] = useState({});
  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
   <>
   <div className="App">
    <Header theme={theme} setTheme={setTheme} />
    <AddTask taskList={taskList} 
    setTaskList={setTaskList} 
    task={task} 
    setTask={setTask}
    />
    <ShowTask taskList={taskList}
    setTaskList={setTaskList}
    task={task} 
    setTask={setTask}/>
   </div>
   </>
  );
}