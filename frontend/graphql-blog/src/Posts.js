import React from 'react';
import { Query } from 'react-apollo';
import gpl from 'graphql-tag';

import Post from './Post';


const Posts = () => (
    <Query query={gpl`{
    
            post {
                id
                title 
                body
            }
    }
    `}>
    
            {({ loading, error, data}) => {
                if(loading) return <p>Loading ...</p>
                if(error) console.log(error);
                console.log(data)
                return data.post.map((currentPost) => (
                    <Post post={currentPost} />
                ));
            }}
    </Query>
);

export default Posts;