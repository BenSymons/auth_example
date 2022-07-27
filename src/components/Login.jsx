import {useState} from "react"
import fakeLogin from "../utils/fakeLogin"
import Header from "./Header"

const Login = () => {
    const [details, setDetails] = useState({email: "", password: ""})
    const [error, setError] = useState(null)

    const handleChange=({target: {value, id}}) => {
        setDetails(prev => ({...prev, [id]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const res = fakeLogin(details)
        if (res.error) {
            setError(res.error)
        } else {
            console.log("credentials are correct")
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