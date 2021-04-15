
const AllMenu = ({posts}) => {
    
    return (
        <div className="allMenu" style={{width:'300px', height:'250px', border:'1px solid #eee', overflowY:'scroll'}}>
            <div className="menuTitle">
            <span className="Title" 
            style={{
                fontSize:'30px', color:'blue',
                fontWeight:'bolder',display:'flex',
                justifyContent:'center'
                }}>menu list</span>
            </div>
            { posts.length ? (
                posts.map (post => (
                    <div className="item" style={{margin:'7px 10px'}} key={post.id}>
                        <span className="title" style={{fontSize:'20px'}}>
                        {post.title}
                        </span>
                    </div>    
                ))
            ):(
                <div>
                    <span>not posts</span>
                </div>
            )}
        </div>
    )
}

export default AllMenu;