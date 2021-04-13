import { useState } from "react";
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import UpdateItem from "./create/UpdateItem";

const Create = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [ingredients, setIngredients] = useState([]);
  
  const [items, setItems] = useState([
    {name:"Grapefruit" , uniqueId: 144},
    {name:"Lime", uniqueId: 222244}, 
    {name:"Coconut", uniqueId: 35677}, 
    {name:"mango", uniqueId: 4345567},
    {name:"noodle", uniqueId: 1367}
  ]);
  
  const history = useHistory();

  const handleSelected = (e) => {
    let value = Array.from(e.target.selectedOptions, option => option.value);
    setIngredients(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const post = { title, price, ingredients,"count": 1 };

    fetch('http://localhost:5000/posts/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post)
    }).then(() => {
        console.log(post);
       history.push('/');
    })
  }

  
  return (
    
    <Grid container 
      direction="column"
      justify="center"
      alignItems="center">
      <h1>Adding a New Dish to Your Menu</h1>
      <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column'}}>
        <label style={{fontSize:'30px'}}>Dish Title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{lineHeight: '2em',fontSize: '20px'}}
        />
        <label style={{fontSize:'30px'}}>Dish Price:</label>
        <input 
          type="text"
          required 
          value={price}
          pattern="\d*"
          maxLength="5"
          onChange={(e) => setPrice(e.target.value)}
          style={{lineHeight: '2em' ,fontSize: '20px'}}
        />
          <label style={{fontSize:'30px'}}>ingredients:</label>  
          <select multiple={true} value={ingredients} onChange={(e)=> handleSelected(e)}>
            {items.length ? items.map(item => 
                <option
                 key={item.uniqueId}                 
                 style={{lineHeight: '2em' ,fontSize: '20px'}}
                  value={item.name}
                >
                {item.name}
                </option>             
            ): 
            <option>not option</option>
            }
          </select>
          <div className="selected" style={{display:'grid',gridTemplateColumns: '1fr 1fr 1fr', width:'120px',height:'auto'}}>
          {ingredients.length ? (
            ingredients.map((item, index) => 
              <span style={{fontSize:'15px', margin:'auto 5px'}} key={index}>{item}</span>
            )
          ):(
            <span style={{fontSize:'15px'}}>notselect</span>
          )}
          </div>
        <button>Add Blog</button>
      </form>
      <UpdateItem/>
      </Grid>
      
  );
}
 
export default Create;