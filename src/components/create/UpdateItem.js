import {useState, useEffect} from "react";

const UpdateItem = () => {
    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState([
        "Grapefruit" ,
        "Lime", 
        "Coconut", 
        "mango",
       "noodle"
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setItems([...items, newItem])
        setNewItem("");
    }

    useEffect(() => {
        console.log(items);
    },[items]);

    return(
        <div className="upItem" style={{margin:"20px auto"}}>
            <form onSubmit={handleSubmit}> 
                <input type="text" value={newItem} onChange={(e)=>setNewItem(e.target.value)} required/>
                <button>add new item</button>
            </form>
        </div>
    )  
}

export default UpdateItem;