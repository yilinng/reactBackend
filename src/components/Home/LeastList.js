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

const LeastList = ({posts}) => {

    const classes = useStyles();

    posts.sort((a, b) => parseFloat(b.count) - parseFloat(a.count));

        return (
            <List component="nav" className={classes.root} aria-label="contacts" style={{border:'1px solid #eee'}}>
            {posts.map(post => 
                <ListItem button key={post.id}>
                    <ListItemIcon>
                    <StarIcon/>
                    </ListItemIcon>
                    <ListItemText primary={post.color}/>
                </ListItem>
            )}
            </List>
        );
    }



export default LeastList;
