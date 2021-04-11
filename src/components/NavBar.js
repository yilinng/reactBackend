import { useState} from "react";
import { NavLink } from "react-router-dom";
import { auth } from './../firebase';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});


const NavBar = ({user}) => {

  const classes = useStyles();

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
   const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
              { user ? (
                <>
                <NavLink to="/create" style={{ textDecoration: 'none', color: 'unset' }} >
                  <ListItem button>
                    <ListItemText primary="Create"/>
                  </ListItem>
                </NavLink>
                  <ListItemText>
                    <button onClick={() => auth.signOut()}>Sign out</button>
                  </ListItemText>
                </>
                ):(
                <>
                <NavLink to="/signin" style={{ textDecoration: 'none', color: 'unset' }} >
                  <ListItem button>
                    <ListItemText primary="Signin"/>
                  </ListItem>
                </NavLink>
                <NavLink to="/signup" style={{ textDecoration: 'none', color: 'unset' }} >
                   <ListItem button>
                    <ListItemText primary="Signup"/>
                  </ListItem>
                </NavLink>
               </>
              )}
      </List>
    </div>
  );

    return (
        <div className="sidebar">
          {['left'].map((anchor) => (
            <>
              <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
              <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
              </Drawer>
            </>
          ))}
        </div>
      /*
      <nav className="nav-wrapper light-blue">
        <div className="links container">
          <Link to="/" className="brand-logo">he Dojo Blog</Link>
          <span data-target="mobile-demo" className="sidenav-trigger hide-on-large-only">
          <i className="material-icons">menu</i>
          </span>
            <ul className="right hide-on-med-and-down">
              { user ? (
                <>
                  <li>
                    <Link to="/create">New Blog</Link>
                  </li>
                  <li>
                    <button onClick={() => auth.signOut()}>Sign out</button>
                  </li>
                </>
                ):(
                <>
                  <li>
                    <Link to="/signin">Sign In</Link>
                  </li>
                  <li>
                    <Link to="/signup">Sign Up</Link>
                  </li>
               </>
                )}
            </ul>
        </div>
      </nav>
      */
    );
  }

  export default NavBar;
