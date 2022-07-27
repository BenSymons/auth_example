import {useState, useContext} from "react"
import fakeLogin from "../utils/fakeLogin"
import Header from "./Header"
import AuthContext from "../utils/authContext"
import jwtDecode from "jwt-decode"
import Cookie from "js-cookie"

const Login = () => {
    const {setUser} = useContext(AuthContext)
    const [details, setDetails] = useState({email: "", password: ""})
    const [error, setError] = useState(null)

    const handleChange=({target: {value, id}}) => {
        setDetails(prev => ({...prev, [id]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        /* Normally the password (in details) would be hashed with bcrypt
        This example uses hardcoded data without the backend but you must always
        remember to hash your passwords before sending them to the backend */
        const res = fakeLogin(details)
        if (res.error) {
            setError(res.error)
        } else {
            const currentUser = jwtDecode(res.token)
            setError(null)
            Cookie.set("token", res.token)
            setUser(currentUser)
        }
    }

    return (
        <div>
            <Header/>
            <p className="center">Please enter your details below to login</p>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label><br />
                    <input id="username" onChange={handleChange}/><br />
                    <label htmlFor="email">Email</label><br />
                    <input id="email" onChange={handleChange}/><br />
                    <label htmlFor="password">Password</label><br />
                    <input id="password" onChange={handleChange}/><br/>
                    <button type="submit">Login</button>
                    {error && <p className="error">{error}</p>}
                </form>
            </div>
        </div>
    )
}

export default Login