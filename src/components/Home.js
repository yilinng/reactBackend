import Postlist from "./Postlist";
import useFetch from "./../useFetch";
import PieChart from './Home/PieChart';
import LeastList from "./Home/LeastList";
import HorizontalBarChart from "./Home/HorizontalBarChart";

const Home = () => {
    const { error, isPending, data: blogs } = useFetch('http://localhost:5000/blogs')
    const { err, isPendings, data: posts } = useFetch('http://localhost:4000/posts')


  return (
    <div className="home container">
        <div className="row">
            <PieChart error={err} isPending={isPendings} posts={posts}/>
               { err && <div>{ err }</div> }
              { isPendings && <div className="center-align">
                <h3>Loading...</h3>
                </div> }
            {posts && <LeastList posts={posts}/>}
        </div>
        <HorizontalBarChart error={err} isPending={isPendings} posts={posts}/>
        { error && <div>{ error }</div> }
        { isPending && <div className="center-align">
            <h3>Loading...</h3>
        </div> }
        {blogs && <Postlist blogs={blogs} />}
    </div>
  );
}

export default Home;
