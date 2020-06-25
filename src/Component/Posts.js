import React from 'react';
// import Pagination from './Pagination'

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <div class="spinner-border text-primary mr-50"></div>;
  }

  return (
    <ul className='list-group mb-4'>
          
      {posts.map(post => (
        <li key={post.id} className='list-group-item  bg-danger text-white '>
    <b> {post.id }. Title:{post.title} </b> 
           <br></br>   <b> Description: </b>{post.body}.
        </li>
      ))}
    </ul>
  );
};

export default Posts;
