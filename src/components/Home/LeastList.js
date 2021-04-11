import { useState } from 'react'

const LeastList = ({posts}) => {


        return (
            <div className="col s5"
             style={{marginTop: '5%'}}>
                <ul className="collection with-header">
                <li className="collection-header"><h4>First Names</h4></li>
            {posts.map(post => {
                <li className="collection-item">
                <div key={post.id}>
                    {post.color}<i className="material-icons">send</i>
                </div>
                </li>
            })}
                </ul>
            </div>
        );
    }



export default LeastList;
