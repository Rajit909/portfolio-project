import React from "react";
import { useState, useEffect } from "react";
import Blogcard from "../components/Blogs/Blogcard";
import axios from "axios";
import "animate.css";
import buffering from "../assets/loading.gif";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const endpoint = "https://api.hashnode.com/";
const ARTICLE_QUERY = `
{
  user(username: "rajitkumar"){
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
`;

function Blogs({ theme }) {
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
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <>
      <Navbar
        theme={theme}
        url1={"/"}
        text1={"home"}
        url2={"/projects"}
        text2={"projects"}
        url3={"/achievements"}
        text3={"achievements"}
        url4={"/contact"}
        text4={"contact"}
      />

      <section className="mt-12">
        <h1 className="text-center font-zen text-3xl bold dark:text-white animate__animated animate__bounceIn">
          BLOGS:
        </h1>
        <p className="my-2 text-xl text-center text-gray-600 dark:text-gray-300">
          These are my latest articles. You can visit my{" "}
          <a href="https://rajit.hashnode.dev/" className="underline">
            Hashnode
          </a>{" "}
          profile to get all articles.
        </p>
        <div className=" px-5 py-4 mx-auto">
          <p className="text-center font-bold text-xl text-[#172C45] dark:text-gray-300 ">
            Latest Articles:{" "}
          </p>
          <div className="flex flex-wrap justify-around">
            {loading ? (
              <img src={buffering} alt="buffering" />
            ) : (
              posts.map((posts) => {
                const date = new Date(posts.dateAdded);
                return (
                  <Blogcard
                    key={posts.slug}
                    title={posts.title}
                    brief={posts.brief}
                    img={posts.coverImage}
                    reaction={posts.totalReactions}
                    comment={posts.responseCount}
                    date={date}
                    fullArticle={`https://rajit.hashnode.dev/${posts.slug}`}
                  />
                );
              })
            )}
          </div>
          <div className="flex justify-center">
            <a
              className="text-[#172C45] inline-flex items-center mx-auto mb-8 text-xl font-bold dark:text-gray-300"
              href="https://rajit.hashnode.dev/"
            >
              Read More Articles
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="scale(1.5)"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer theme={theme} />
    </>
  );
}

export default Blogs;


