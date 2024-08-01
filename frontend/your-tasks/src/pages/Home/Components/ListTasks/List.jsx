import { useState } from 'react';
import styles from './list.module.css'
import axios from 'axios';


export default function List({ list }) {
    const [taskName, setTaskName] = useState("")
    
    function handleChangeTaskName(e) {
        setTaskName(e.target.value)
    }

    function submitFormTaskAddition(e) {
        e.preventDefault()
        
        axios.post("http://127.0.0.1:8000/tasks/", {
            user: "http://127.0.0.1:8000/users/7/",
            title: taskName,
            List: list.url
        })

        setTaskName("")
    }

    return(
        <div className={styles.list}>
            <h3>{list.title}</h3>

            <div>
                {list.task_set.map(task => <p key={task.id}>{task.title}</p>)}
            </div>

            <footer className={styles.footerList}>
                <form onSubmit={submitFormTaskAddition}>
                    <input type="text"
                    placeholder='adicionar nova tarefa' 
                    value={taskName}
                    onChange={handleChangeTaskName}
                    />
                </form>
            </footer>
        </div>
    );
}
