import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import UpdateItem from "./create/UpdateItem";

const Create = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [ingredients, setIngredients] = useState([]);  
  const [items, setItems] = useState([]);
  const history = useHistory();

  const styles ={
    selected:{
      display:'grid',
      gridTemplateColumns: '1fr 1fr 1fr', 
      width:'272px',
      height:'95px'
    }
  }
  const onAdd = (formState) => {
    //console.log('I will submit my ChildForm Input State: ' + formState);
    setItems(formState);
  }

  const handleSelected = (e) => {
    const options = e.target.options;
    let value = [];
    for (let i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
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

  
  useEffect(() => {
    console.log(ingredients);
  }, [ingredients])
  

  return (
    
    <Grid container 
      direction="column"
      justify="center"
      alignItems="center">
      <h1>Adding a New Dish to Your Menu</h1>
      <form className="create" onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column'}}>
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
          <span>use ctrl key to multiple option</span>  
          <select multiple={true} value={ingredients} onChange={(e)=> handleSelected(e)} size="5">
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
          <div className="selected" style={styles.selected}>
          {ingredients.length ? (
            ingredients.map((item, index) => 
              <span className={item.length > 6 ? 'hugSpan': 'generalSpan'} key={index}>{item}</span>
            )
          ):(
            <span style={{fontSize:'15px'}}>notselect</span>
          )}
          </div>
        <button className="addbtn">Add</button>
      </form>
      <UpdateItem onAdd={onAdd}/>
      </Grid>
      
  );
}
 
export default Create;