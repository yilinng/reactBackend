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

    const handleSubmit = (e) => {
        e.preventDefault();
        setItems([...items, newItem]);
        setNewItem("");
    }

    useEffect(() => {
        console.log(items);
        props.onAdd(items);
    },[items, props]);

    return(
        <div className="upItem" style={{margin:"5% auto"}}>
            <form onSubmit={handleSubmit}> 
                <input type="text" value={newItem} onChange={(e)=>setNewItem(e.target.value)} required/>
                <button>add new ingredient</button>
            </form>
        </div>
    )  
}

export default UpdateItem;