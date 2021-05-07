import { Link } from 'react-router-dom';



const LeastList = ({orders}) => {

    orders.sort((a, b) => parseFloat(b.count) - parseFloat(a.count));

    const pickThree = orders.filter((order, index) => index < 3);
        return (
            <div className="hotList">
                <span className="hotTitle">Hot Dish!!</span>
            <div className="dishList">    
            {pickThree.map(order => 
                <Link to={`/posts/${order.id}`} key={order.id} className="link">
                    {order.title}
                </Link>    
            )}
            </div>
            </div>
        );
    }



export default LeastList;
