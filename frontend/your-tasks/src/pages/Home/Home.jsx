import styles from './home.module.css'
import CreateNewListComponent from './Components/CreateNewList/CreateNewListComponent';
import ListTasks from './Components/ListTasks/ListTasks';


export default function Home() {
    return(
        <div className={styles.container}>
            <aside className={styles.aside}></aside>

            <main className={styles.main}>
                <CreateNewListComponent />

                <ListTasks />
            </main>
        </div>
    );
}
