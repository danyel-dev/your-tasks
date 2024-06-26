import axios from "axios";
import { useEffect, useState } from "react";


export default function Tasks() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
      const URL = "http://127.0.0.1:8000/tasks/"
      
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      }
  
      axios.get(URL, config).then(resp => setTasks(resp.data)) 
  }, [])

  return(
      <ul>
        {tasks.map(task => <li>{task.title}</li>)}
      </ul>
  );
}
