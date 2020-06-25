import  React, { useState, useEffect } from 'react';
import Posts from './Posts';
import Pagination from './Pagination';
import axios from 'axios';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// 'https://jsonplaceholder.typicode.com/posts'
const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
 

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

// const res = await axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=fc30a25cd1c64b6abf227dbad8ce79aa');

const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

//   Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className=' w-1000 h-100 p-2 container bg-success text-white"  mt-5'>
      <h1 className=' w-50 p-3 bg-primary text-white mb-23  rounded'>Welcome To My Blog</h1>
      <Posts posts={currentPosts} loading={loading}  />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
