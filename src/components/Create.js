import { useState } from "react";
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import UpdateItem from "./create/UpdateItem";

const Create = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [ingredients, setIngredients] = useState([]);  
  const [items, setItems] = useState([]);
  const history = useHistory();

  const onAdd = (formState) => {
    //console.log('I will submit my ChildForm Input State: ' + formState);
    setItems(formState);
  }

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

  /*
  useEffect(() => {
    console.log(items);
  }, [items])
  */

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
            {items.length ? items.map((item, index) => 
                <option
                 key={item}                 
                 style={{lineHeight: '2em' ,fontSize: '20px'}}
                  value={item}
                >
                {item}
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
        <button style={{marginTop:"10%"}}>Add Blog</button>
      </form>
      <UpdateItem onAdd={onAdd}/>
      </Grid>
      
  );
}
 
export default Create;