import React from 'react';

const Post = (props) => (

        <div className="card text-white bg-secondary mt-4">
            <div className="card-body">
                <h4 className="card-title"><b>Post Title :</b>  {`${props.post.title} `}</h4>
                <p className="card-text"><b>Post Body :</b>  {`${props.post.body} `}</p>
                <p className="card-text"><b>Posted by :</b>  {`${props.post.postedBy.name} `}</p>
                <h4 className="card-text my-3"><b>Comments</b></h4>
                {props.comments.map((comment) => {
                    return  <div className="ml-4">
                                <h6><span><b>&#187;</b></span> {`${comment.text}`} <span className="badge badge-info mx-1"> 
                                {`${comment.user.name}`}</span>
                                </h6>
                            </div>
                })}
            
            </div>
        </div>
)

export default Post