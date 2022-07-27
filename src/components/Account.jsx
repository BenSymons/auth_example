import Header from "./Header"
import { useContext } from "react"
import AuthContext from "../utils/authContext"
import Cookie from "js-cookie"
import { useNavigate } from "react-router-dom"

const Account = () => {
    const {user, setUser} = useContext(AuthContext)
    const navigate = useNavigate()
        const {username, email} = user

        const handleClick = () => {
            Cookie.remove("token")
            setUser(null)
            navigate("/")
        }
    return (
        <div>
            <Header/>
            <h1 className="center">My Account</h1>
            <div className="container">
                <p>Welcome {username}!</p>
                <p>Here are your current details</p>
                <ul>
                    <li>username: <b>{username}</b></li>
                    <li>email: <b>{email}</b></li>
                </ul>
            </div>
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}

export default Account