//import { useState } from 'react'

const LeastList = ({posts}) => {

    //const [sortPosts, setSortPosts] = useState([]);

    posts.sort((a, b) => parseFloat(b.count) - parseFloat(a.count));

        return (
            <div className="col s12 m4"
             style={{marginTop: '4%'}}>
                <ul className="collection with-header">
                <li className="collection-header">
                    <h4 style={{textAlign: 'center'}}>count rank</h4>
                </li>
            {posts.map(post => (
                <li className="collection-item" key={post.id}>
                <div style={{
                    display: 'flex',
                    justifyContent:'space-around',
                    fontSize: '20px'
                    }}>
                    <span>{post.color}</span>
                    <span>{post.count}</span>
                    <i className="material-icons">send</i>
                </div>
                </li>
            ))}
                </ul>
            </div>
        );
    }



export default LeastList;
