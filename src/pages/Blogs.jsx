import React from 'react'
import { useState, useEffect } from 'react'
import BlogCard from "../components/Blogs/Blogcard"
import axios from "axios"
import "animate.css"
import buffering from "../assets/loading.gif"
import Navbar from "../components/Navbar/Navbar"
import Footer from '../components/Footer/Footer'

const endpoint = "https://api.hashnode.com/";
const ARTICLE_QUERY = `
{
  user(username: "rajit"){
    publication{
      posts(page: 0){
        title
        brief
        coverImage
        responseCount
        totalReactions
        slug
        dateAdded
      }
    }
  }
}
`

function Blogs({theme}) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState([true]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios({
        url: endpoint,
        method: "POST",
        data: {
          query: ARTICLE_QUERY,
        },
      });
      setPosts(response.data.data.user.publication.posts);
      setLoading(false)
    }  
    fetchData();
  }, []);
  
  return (
    <div>
      
    </div>
  )
}

export default Blogs
