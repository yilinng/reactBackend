import {useState, useEffect} from "react";

const UpdateItem = (props) => {
    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState([
       "cheese",
       "Bacon",
       "corn",
       "tomato",
       "egg",
       "basil",
       "mushroom",
    ]);

    const styles = {
       input:{
        width:"150px",
        height:"30px",
        marginRight:"5px"
       }
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        setItems([...items, newItem]);
        setNewItem("");
    }

    useEffect(() => {
        props.onAdd(items);
    },[items, props]);

    return(
        <div className="upItem" style={{margin:"5% auto"}}>
            <form onSubmit={handleSubmit}> 
                <input style={styles.input} type="text" value={newItem} onChange={(e)=>setNewItem(e.target.value)} required/>
                <button className="addIngredient">add new ingredient</button>
            </form>
        </div>
    )  
}

export default UpdateItem;