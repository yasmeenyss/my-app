import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const NavBar = () => {
  const {isLoggedIn,login, logout } = useContext(AuthContext)

  return (
    <nav>
        {isLoggedIn ? (
          <>
              <h3>YOUR ACCOUNT HAS BEEN LOGGED IN</h3>
            <button onClick={logout}>
              Logout
              
              </button>
              </>
        ) : (
          <>
           <h3>YOUR ACCOUNT HAS BEEN LOGGED out</h3>
            <button onClick={login}>
              Login
              </button>
              </>
                 
        )}
    </nav>
  )
}

export default NavBar;