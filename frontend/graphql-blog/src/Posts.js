import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Post from './Post';

const POSTS_QUERY = gql`
  {
    post {
      id
      title
      body
      postedBy {
          name
      }
      comments {
        text
        user {
          name
        }
      }
    }
  }
`;

const Posts = () => (
    <Query query={POSTS_QUERY}>
    
            {({ loading, error, data}) => {
                if(loading) return <p>Loading ...</p>
                if(error) return `Error! ${error.message}`;
                return data.post.map((currentPost) => (
                    <Post post={currentPost} comments={currentPost.comments}/>
                ));
            }}
    </Query>
);

export default Posts;