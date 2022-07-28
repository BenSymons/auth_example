import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import AuthContext from "../utils/AuthContext"

const Header = () => {
    const {user} = useContext(AuthContext)
    let navigate = useNavigate()

    const handleClick = () => {
        if(!user) {
            navigate("/login")
        } else {
            navigate("/account")
        }
    }
    return (
        <nav className="header">
            {user?.username}
            <Link to="/">Home</Link>
            <div onClick={handleClick}>Account</div>
            <Link to="/login">Login</Link>
        </nav>
    )
}

export default Header