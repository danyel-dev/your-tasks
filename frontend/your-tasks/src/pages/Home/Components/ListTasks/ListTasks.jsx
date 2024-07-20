import axios from "axios";
import { useEffect, useState } from "react";
import styles from './listTasks.module.css'
import List from "./List";


export default function ListTasks() {
    const [listTasks, setListTasks] = useState([])

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/lists/").then(resp => setListTasks(resp.data))
    }, [])

    return(
        <div className={styles.listTasks}>
            {listTasks.map(list => <List key={list.id} list={list}/>)}
        </div>
    );
}
