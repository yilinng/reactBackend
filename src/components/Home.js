import useFetch from "./../useFetch";
import PieChart from './Home/PieChart';
import LeastList from "./Home/LeastList";
import HorizontalBarChart from "./Home/HorizontalBarChart";
import orderList from './../data/order.json';
import AllMenu from './Home/AllMenu';

const Home = () => {
    const { err, isPending, data: posts } = useFetch('http://localhost:5000/posts');
    //get all item
    const orders = orderList.posts;
    //pick six item
    const pickSix = orders.filter((order, index) => index < 6);
  return (
    <div className="home">
      {orders &&  
        <div className="pie">
            <div style={{ border:'1px solid #eee', padding:'5px'}}>
              <PieChart posts={pickSix}/>
            </div>        
        </div>
        }

      {orders && 
        <div className="top3">
          {orders && <LeastList orders={orders}/>}
        </div>
      }

       {orders && 
          <div className="horizontal">
          <HorizontalBarChart orders={pickSix}/>
        </div>
        }

        { isPending && <div>Loading...</div> }
        {posts ? 
        <div className="allMenu">
            <AllMenu posts={posts}/>
        </div>
        :
        <div>{err}</div>
        }  

    </div>

  );
}

export default Home;
