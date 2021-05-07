import { Link } from 'react-router-dom';

const AllMenu = ({posts}) => {
    //const sortPosts = posts.sort((a, b) => a.id < b.id ? 1 : -1);

    return (
        <div className="allMenu">
            <div className="menuTitle">
            <span className="title">menu list</span>
            </div>
            { posts.length ? (
                posts.map (post => (
                    <div className="itemColumn" key={post.id}>
                        <Link to={`/posts/${post.id}`} className="link">
                            <h3>{ post.title }</h3>
                        </Link>
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