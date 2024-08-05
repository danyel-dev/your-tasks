import styles from './item.module.css'


export default function Items({ task }) {
    return(
        <li className={styles.listItem}>
            <p className={styles.listItemTitle}>
                <input type="checkbox" />
                {task.title}
            </p>

            <i className="fa-solid fa-ellipsis-vertical" id={styles.listItemIconOptions}></i>
        </li>
    );
}
