import styles from './home.module.css'


export default function Home() {
    return(
        <div className={styles.container}>
            <aside className={styles.aside}></aside>

            <main className={styles.main}>
                <div className={styles.createListContainer}>
                    <button className={styles.createListButton}>Nova Lista de Tarefas</button>
                </div>
            </main>
        </div>
    );
}
