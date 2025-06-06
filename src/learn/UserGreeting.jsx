 
function UserGreeting({isLoggedIn = false, username="PIPO"}){

    const welcomeMessage = <h2 className="welcome-message">Welcome {username}</h2> 
    const loginprompt = <h2 className="login-prompt">PLease log in to continue</h2>

    return(isLoggedIn ? welcomeMessage: loginprompt)
}

export default UserGreeting
