import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 300,
        backgroundColor: theme.palette.background.paper,
      },
}));

const LeastList = ({orders}) => {

    const classes = useStyles();
    orders.sort((a, b) => parseFloat(b.count) - parseFloat(a.count));

    const pickThree = orders.filter((order, index) => index < 3);
        return (
            <List component="nav" className={classes.root} aria-label="contacts" style={{border:'1px solid #eee'}}>
                <span 
                style={{
                    fontSize:'20px',width:'100%',
                    minHeight: '30px',display:'flex',
                    justifyContent:'center',backgroundColor:'#9932CC',
                    color:'white' ,fontWeight:'bold'}}>Hot Dish!!</span>
            {pickThree.map(order => 
                <ListItem button key={order.id}>
                    <ListItemIcon>
                    <StarIcon/>
                    </ListItemIcon>
                    <ListItemText primary={order.title}/>
                </ListItem>
            )}
            </List>
        );
    }



export default LeastList;
