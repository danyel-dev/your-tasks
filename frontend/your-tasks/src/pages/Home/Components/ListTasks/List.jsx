import styles from './list.module.css'


export default function List({list}) {
    return(
        <div className={styles.list}>
            <h3>{list.title}</h3>

            <div>
                {list.task_set.map(task => <p key={task.id}>{task.title}</p>)}
            </div>
        </div>
    );
}
