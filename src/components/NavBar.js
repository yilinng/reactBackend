import { Link } from "react-router-dom";
import { useState } from 'react';

const NavBar = () => {

  const [showSide, setShowSide] = useState(false);
  
  const sideStyle = {
    display:'block',
    width:'300px',
    opacity:'1',
    transition: 'width 2s',     
  }


    return (
      <nav className="nav-wrapper light-blue">
        <div className="links container">
          <Link to="/" className="brand-logo">he Dojo Blog</Link>  
          <span data-target="mobile-demo" className="sidenav-trigger hide-on-large-only" onClick={()=>setShowSide(true)}>
          <i className="material-icons">menu</i>  
          </span>
            <ul className="right hide-on-med-and-down">
                <li>
                <Link to="/create">New Blog</Link>                    
                </li>
                <li>
                    <span className="waves-effect blue-grey black btn">desktop</span>
                </li>   
            </ul>
          {
          showSide && <div className="sidenav-overlay center-align" style ={sideStyle}>
            <div className="sideList">
            <i className="material-icons" onClick={()=>setShowSide(false)}
            style={{
             fontSize:'20px',
             color: 'white' 
            }}>close</i>  
            <div style={{
              fontSize:'20px',
              fontWeight:"bold"
            }}>       
                <Link to="/create">New Blog</Link>                    
            </div>
            <div>
                <span className="waves-effect waves-light btn">button</span>
            </div>  
            </div>
            </div>     
          }  
        </div>
      </nav>
    );
  }
   
  export default NavBar;