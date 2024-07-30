import { useState } from 'react';
import styles from './createNewList.module.css'
import axios from 'axios';


export default function CreateNewListComponent() {
    const [showListCreationForm, setShowListCreationForm] = useState(false)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    function handleChangeListCreationForm() {
        setShowListCreationForm(!showListCreationForm)
    }

    function handleSubmitForm(e) {
        e.preventDefault()

        if(title) {
            axios.post("http://127.0.0.1:8000/lists/", {
                user: "http://127.0.0.1:8000/users/2/",
                title: title,
                description: description
            }).then(response => console.log(response.data))
        }
        
        setTitle("")
        setDescription("")
    }

    function handleChangeTitleField(e) {
        setTitle(e.target.value)
    }

    function handleChangeDescriptionField(e) {
        setDescription(e.target.value)
    }

    return(
        <div className={styles.createListContainer}>
            <button className={styles.createListButton} onClick={handleChangeListCreationForm}>Nova Lista de Tarefas</button>

            {showListCreationForm? 
                <form className={styles.ListCreationForm}>
                    <div className={styles.formField}>
                        <label htmlFor="title" className={styles.formFieldLabel}>Titulo</label>
                        <input type="text" value={title} onChange={handleChangeTitleField} id='title' />
                    </div>

                    <div className={styles.formField}>
                        <label htmlFor="description" className={styles.formFieldLabel}>
                            Descrição <small className={styles.smallOptional}>(Opcional)</small>
                        </label>

                        <textarea name='description' cols="30" rows="5" id='description' value={description} onChange={handleChangeDescriptionField}></textarea>
                    </div>

                    <button className={styles.buttonSubmitForm} onClick={handleSubmitForm}>Criar Lista</button>
                </form>
            : ""
            }
        </div>
    );
}
