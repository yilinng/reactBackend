import {  useHistory, useParams, Link } from "react-router-dom";
import useFetch from "../../useFetch";

const Detail = () => {

    const { id } = useParams();
    const { data: post, error, isPending } = useFetch('http://localhost:5000/posts/' + id);
    const history = useHistory();

    const handleClick = () => {

      let confirmColumn = window.confirm("Do you want to delete this?");

      if (confirmColumn){
        fetch('http://localhost:5000/posts/' + post.id, {
          method: 'DELETE'
        }).then(() => {
          history.push('/');
        }) 
      }else{
        return false;
      }
       
      }

    return (
        <div className="post-details">
          { isPending && <div>Loading...</div> }
          { error && <div>{ error }</div> }
          { post && (
            <article>
              <h2 className="title" style={{width:'360xp'}}>Dish Title: { post.title }</h2>
              <hr/>
              <div className="priceColumn">
                <span className="priceName">Price:</span>
                <span className="price">${ post.price }</span>
              </div>
              <hr/>
              <div className="ingredients">
                <span className="ingredientsName">ingredients:</span>
                <div className="itemList">
                  {post && post.ingredients.map((item, index) => (<span className="item" key={index}>{item}</span>))}
                </div>
              </div>
              <button className="deleteBtn" onClick={handleClick}>delete</button>
              <Link to={`/`} className="backBtn">
                    <span>Back to homePage</span>
              </Link>
            </article>
          )}
        </div>
      );
}

export default Detail;