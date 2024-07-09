import axios from "axios"

export default function Register() {
    function userRegister() {
        axios.post("http://127.0.0.1:8000/users/", {username: "maria", password: "maria123"})
    }

    return(
        <button onClick={userRegister}>register</button>
    )
}
