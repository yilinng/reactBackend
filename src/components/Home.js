import Postlist from "./Postlist";
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
    const { error, isPending, data: blogs } = useFetch('http://localhost:5000/blogs')
    const { err, isPendings, data: posts } = useFetch('http://localhost:4000/posts')
    const matches = useMediaQuery('(min-width:600px)');

  return (
    <div className={classes.root}>
      <Grid container spacing={3} 
        style={ matches ? { margin:'auto'} : {margin:'auto'}}>
        <Grid item xs={11} sm={6}>
          <div style={{ border:'1px solid black', paddingBottom:'5px'}}>
            <PieChart error={err} isPending={isPendings} posts={posts}/>
               { err && <div>{ err }</div> }
              { isPendings && <div className="center-align">
                <h3>Loading...</h3>
                </div> }
          </div>        
        </Grid>

        <Grid item xs={10} sm={6}
        style={ matches ? { margin:'0'} : {margin:'auto'}}>
            {posts && <LeastList posts={posts}/>}
        </Grid>
                
        <Grid item xs={10} sm={6}>
        <div>
          <HorizontalBarChart error={err} isPending={isPendings} posts={posts}/>
        </div>  
          { error && <div>{ error }</div> }
          { isPending && <div className="center-align">
              <h3>Loading...</h3>
          </div> }
          </Grid>
        {blogs && <Postlist blogs={blogs} />}
      </Grid>
    </div>
  );
}

export default Home;
