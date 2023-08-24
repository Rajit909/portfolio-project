import React from "react";
import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import "animate.css";

function Blogcard({ title, brief, img, fullArticle, reaction, comment, date }) {
  return (
    <div className="p-3 md:w-[430px] animated_animated animate_flipInY ">
      <div className="h-full rounded-lg overflow-hidden bg-zinc-200 dark:bg-zinc-700 hover:shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] hover:bg-zinc-300">
        <img
          className="md:h-56 w-full object-cover object-center "
          src={img}
          alt="blog"
        />

        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 dark:text-gray-400 mb-1">
            {date.toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
            {title}
          </h1>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300 mb-3">
            {brief}
          </p>
          <div className="flex items-center justify-between flex-wrap ">
            <a
              className="text-slate-700 dark:text-slate-300 font-bold inline-flex items-center md:mb-2 lg:mb-0"
              href={fullArticle}
            >
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <div>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <BiLike />
                {reaction}
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <FaRegComment className="mr-1" />
                {comment}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogcard;
