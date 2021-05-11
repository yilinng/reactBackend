import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from './../firebase';

const NavBar = ({user}) => {
  const history = useHistory();
  const [active, setActive] = useState(false);
  const handleToHome= () => {
    auth.signOut();
    history.push('/');
  }

  const handleSideBar = () => {
    setActive(!active)
  }

  const rebackSideBar = () => {
    setActive(!active);
  }
  
    return (
      <div className="header">
        <Link to="/" className="logo">pizza backend admin</Link>
          <div className="headerRight">
          {user ?(
          <>
            <Link to="/create" >New one</Link>
            <span className="siginOut" onClick={handleToHome}>Sign out</span>
          </>
          ):(
            <>
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
            </>
          )}            
          </div>
          
          <div className="sideBar" 
            style={{ width: active ? '200px': '0px'}} >
              <span className="deleteBtn" onClick={rebackSideBar}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
          {user ?(
          <>
            <Link to="/create" >New one</Link>
            <span className="siginOut" onClick={handleToHome}>Sign out</span>
          </>
          ):(
            <>
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
            </>
          )}            
          </div>

          <div className="sideIcon" onClick={handleSideBar}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" stroke="white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
      </div>
    );
  }

  export default NavBar;
