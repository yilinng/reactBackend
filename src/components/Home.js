import useFetch from "./../useFetch";
import PieChart from './Home/PieChart';
import LeastList from "./Home/LeastList";
import HorizontalBarChart from "./Home/HorizontalBarChart";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  }
}));



const Home = () => {
    const classes = useStyles();
    const { err, isPendings, data: posts } = useFetch('http://localhost:5000/posts')
    const matches = useMediaQuery('(min-width:600px)');

  return (
    <div className={classes.root}>
      <Grid container 
      direction="row"
      justify="center"
      alignItems="baseline"
      >
        <Grid item xs={10} sm={4}>
          <div style={{ border:'1px solid #eee', paddingBottom:'5px'}}>
            <PieChart error={err} isPending={isPendings} posts={posts}/>
               { err && <div>{ err }</div> }
              { isPendings && <div className="center-align">
                <h3>Loading...</h3>
                </div> }
          </div>        
        </Grid>

        <Grid item xs={10} sm={4}
        style={ matches ? { margin:'auto 2%'} : {margin:'1% auto'}}>
            {posts && <LeastList posts={posts}/>}
        </Grid>
                
        <Grid item xs={12} sm={4}>
        <div>
          <HorizontalBarChart error={err} isPending={isPendings} posts={posts}/>
        </div>           
          </Grid>
      </Grid>
    </div>
  );
}

export default Home;
