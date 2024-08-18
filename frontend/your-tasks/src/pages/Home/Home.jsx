import styles from './home.module.css'
import CreateNewListComponent from './Components/CreateNewList/CreateNewListComponent';
import ListTasks from './Components/ListTasks/ListTasks';
import { useState } from 'react';


export default function Home() {
    const [openModal, setOpenModal] = useState(false)

    function handleClick(e) {
        var div = document.getElementById('click');
    
    // Verifica se o clique ocorreu fora da div
        if (!div.contains(e.target)) {
            setOpenModal(false)
        }
    }

    return(
        <div className={styles.container}>
            {openModal?
                <div className={styles.modal} onClick={handleClick}>
                    <div id='click'>
                        <CreateNewListComponent />
                    </div>
                </div>
                : 
                ""    
            }

            <aside className={styles.aside}></aside>

            <main className={styles.main}>
                <button onClick={() => {setOpenModal(true)}}>Clique aqui</button>

                <ListTasks />
            </main>
        </div>
    );
}
