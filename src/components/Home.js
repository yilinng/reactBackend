//import useFetch from "./../useFetch";
import PieChart from './Home/PieChart';
import LeastList from "./Home/LeastList";
import HorizontalBarChart from "./Home/HorizontalBarChart";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import orderList from './../data/order.json';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  control:{
    padding: theme.spacing(2),
  }
}));



const Home = () => {
    const classes = useStyles();
    //const { err, isPendings, data: posts } = useFetch('http://localhost:5000/posts')
    const matches = useMediaQuery('(min-width:600px)');
    const orders = orderList.posts;
  return (
    <div className={classes.root}>
      <Grid container 
       direction="column"
      justify="space-evenly"
      alignItems="center"
      >
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          className={classes.control}
        >
          <Grid item xs={12} md={4}>
            <div style={{ border:'1px solid #eee', padding:'5px'}}>
              <PieChart posts={orders}/>
            </div>        
          </Grid>

          <Grid item xs={9} md={4}
          style={ matches ? { margin:'3% 1%'} : {margin:'1% auto'}}>
              {orders && <LeastList orders={orders}/>}
          </Grid>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          className={classes.control}
        >  
          <Grid item xs={11} md={4}>
            <HorizontalBarChart posts={orders}/>
          </Grid>

          <Grid item xs={9} md={4}>
            {orders && <LeastList orders={orders}/>}
          </Grid>

        </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
