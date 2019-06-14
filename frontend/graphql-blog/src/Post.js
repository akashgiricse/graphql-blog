import React from 'react';

const Post = (props) => (

        <div className="card text-white bg-secondary mt-4">
            <div className="card-body">
            <h4 className="card-title"><b>Post Title :</b>  {`${props.post.title} `}</h4>
            <p className="card-text"><b>Post Body :</b>  {`${props.post.body} `}</p>
            </div>
        </div>
)

export default Post