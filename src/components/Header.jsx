import userEvent from "@testing-library/user-event"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import AuthContext from "../utils/authContext"
import jwtDecode from "jwt-decode"

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
            {user && user.username}
            <Link to="/">Home</Link>
            <div onClick={handleClick}>Account</div>
            <Link to="/login">Login</Link>
        </nav>
    )
}

export default Header