import styles from './login.module.css'


export default function Login() {
    return(
        <main>
            <h1>Your Tasks</h1>
            
            <form className={styles.form}>
                
                <div>
                    <label htmlFor="">Nome de usuário</label>
                    <input type="text" />
                </div>
                
                <div>
                    <label htmlFor="">Senha</label>
                    <input type="password" />
                </div>
                
                <button>Entrar</button>
            </form>
        </main>
    )
}
