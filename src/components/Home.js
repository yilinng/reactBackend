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
    flexGrow: 1,
    [theme.breakpoints.between('sm', 'md')]: {
      backgroundColor: '#eee',
    },
  },
  gridchange:{
    [theme.breakpoints.between('sm', 'md')]: {
      width: '400px',
      heigth:'300px',
    },
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
        >
          <Grid item xs={12} sm={4} className={classes.gridchange}>
            <div style={{ border:'1px solid #eee', padding:'5px'}}>
              <PieChart posts={orders}/>
            </div>        
          </Grid>

          <Grid item xs={9} sm={4}
          style={ matches ? { margin:'3% 1%'} : {margin:'1% auto'}}>
              {orders && <LeastList orders={orders}/>}
          </Grid>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >  

          <Grid item xs={11} sm={4}>
            <HorizontalBarChart posts={orders}/>
          </Grid>

          <Grid item xs={9} sm={4}>
            {orders && <LeastList orders={orders}/>}
          </Grid>

        </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
