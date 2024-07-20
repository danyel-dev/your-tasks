import styles from './list.module.css'


export default function List({list}) {
    return(
        <div className={styles.list}>
            {list.title}
            {list.task_set.map(task => <p key={task.id}>{task.title}</p>)}
        </div>
    );
}
