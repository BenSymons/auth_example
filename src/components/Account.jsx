import Header from "./Header"

const Account = () => {
        const handleClick = () => {
            console.log("logging out")
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