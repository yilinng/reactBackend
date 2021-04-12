import { useState} from "react";
import { NavLink, Link } from "react-router-dom";
import { auth } from './../firebase';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import DirectionsBikeOutlinedIcon from '@material-ui/icons/DirectionsBikeOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const useNavStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


const NavBar = ({user}) => {

  const matches = useMediaQuery('(min-width:600px)');
  const classes = useStyles();
  const classNavs = useNavStyles();

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
                  <ListItemIcon>
                  <AddOutlinedIcon/>
                  </ListItemIcon>
                    <ListItemText primary="Create"/>
                  </ListItem>
                </NavLink>
                <ListItem button onClick={() => auth.signOut()}>
                <ListItemIcon>
                  <ExitToAppOutlinedIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Sign out"/>
                  </ListItem>
                </>
                ):(
                <>
                <NavLink to="/signin" style={{ textDecoration: 'none', color: 'unset' }} >
                  <ListItem button>
                  <ListItemIcon>
                  <DirectionsBikeOutlinedIcon/>
                  </ListItemIcon>
                    <ListItemText primary="Signin"/>
                  </ListItem>
                </NavLink>
                <NavLink to="/signup" style={{ textDecoration: 'none', color: 'unset' }} >
                   <ListItem button>
                   <ListItemIcon>
                    < PersonAddOutlinedIcon/>
                  </ListItemIcon>
                    <ListItemText primary="Signup"/>
                  </ListItem>
                </NavLink>
               </>
              )}
      </List>
    </div>
  );

    return (
      
      <div className={classNavs.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classNavs.menuButton} color="inherit" aria-label="menu">
            {['left'].map((anchor) => (
            <>
              <div className="toggleMenu">
              <MenuIcon fontSize="large" onClick={toggleDrawer(anchor, true)}/>
              <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
              </Drawer>
              </div>
            </>
          ))}
          </IconButton>
          <Typography variant="h6" className={classNavs.title} style={{color:'white'}}>
          <Link to="/"  style={{color:'white',textDecoration: 'none'}}>chart Blog</Link>
          </Typography>
          {user ?(
          <>
            <Button color="inherit" style={ matches ? { display:'block'} : {display:'none'}}>
            <Link to="/create"  style={{color:'white',textDecoration: 'none'}}>New one</Link>
          </Button>
          <Button color="inherit" style={ matches ? { display:'block'} : {display:'none'}}>
            <span style={{color:'white'}} onClick={() => auth.signOut()}>Sign out</span>
          </Button>
          </>
          ):(
            <>
            <Button color="inherit" style={ matches ? { display:'block'} : {display:'none'}}>
            <Link to="/signin"  style={{color:'white',textDecoration: 'none'}}>Sign In</Link>
          </Button>
          <Button color="inherit" style={ matches ? { display:'block'} : {display:'none'}}>
            <Link to="/signup" style={{color:'white',textDecoration: 'none'}}>Sign Up</Link>
          </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
    );
  }

  export default NavBar;
