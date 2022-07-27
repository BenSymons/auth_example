import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Header = () => {
    let navigate = useNavigate()
    const handleClick = () => {
        if(true) {
            navigate("/login")
        } else {
            navigate("/account")
        }
    }
    return (
        <nav className="header">
            <Link to="/">Home</Link>
            <div onClick={handleClick}>Account</div>
            <Link to="/login">Login</Link>
        </nav>
    )
}

export default Header