import Header from "./Header"
import { useContext } from "react"
import AuthContext from "../utils/AuthContext"
import Cookie from "js-cookie"
import { useNavigate } from "react-router-dom"

const Account = () => {
    const navigate = useNavigate()
    const {setUser} = useContext(AuthContext)
        const handleClick = () => {
            setUser(null)
            Cookie.remove("token")
            navigate("/")
        }
    return (
        <div>
            <Header/>
            <h1 className="center">My Account</h1>
            <div className="container">
                <p>Welcome Me!</p>
                <p>Here are your current details</p>
                <ul>
                    <li>username: <b>me</b></li>
                    <li>email: <b>me.email.com</b></li>
                </ul>
            </div>
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}

export default Account