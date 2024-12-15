import React, { useState, useEffect } from "react";
import DummyData from "../assets/DummyData.json"; // Importing the JSON file

interface Post {
  id: number;
  name: string;
  image: string;
  comments: number;
  likes: number;
  caption: string;
  date: string;
}

const Cards: React.FC = () => {
  const [posts, ] = useState<Post[]>(DummyData); // All posts from DummyData
  const [visiblePosts, setVisiblePosts] = useState<Post[]>([]); // Visible posts to display
  const postsPerPage = 5; // Number of posts to show at a time

  // Function to load posts
  const loadPosts = () => {
    const nextPosts = posts.slice(
      visiblePosts.length,
      visiblePosts.length + postsPerPage
    );
    setVisiblePosts((prevPosts) => [...prevPosts, ...nextPosts]);
  };

  // Load initial posts when the component mounts
  useEffect(() => {
    loadPosts();
  }, [posts]);

  // Handle scroll event to load more posts
  const handleScroll = () => {
    const bottom =
      Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      ) ===
      Math.max(
        window.innerHeight + window.scrollY,
        document.documentElement.scrollTop + document.body.scrollTop
      );

    if (bottom) {
      loadPosts();
    }
  };

  // Add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visiblePosts]);

  return (
    <div>
      {visiblePosts.map((post) => (
        <div
          style={{ width: "100%" }}
          className="flex justify-center items-center min-h-screen"
          key={post.id}
        >
          <div className="max-w-[720px] mx-auto">
            {/* Your card content */}
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-1">
                  {post.name}
                  <span role="img" aria-label="heart-eyes" className="text-lg">
                    😍
                  </span>
                </h2>
                <p className="text-sm text-gray-500">
                  Vipul Chauhan · {post.date}· 🌐
                </p>
              </div>
            </div>

            {/* Centering wrapper */}
            <div className="relative flex w-[100%] max-w-[35rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
              <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <img src={post.image} alt="ui/ux review check" />
                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60" />
                <button
                  className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                  </span>
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h5 className="flex items-center font-sans text-l antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 ml-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                      />
                    </svg>
                    <span style={{ marginLeft: "6px" }}>{post.likes}</span>
                  </h5>

                  <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 20.25c-4.635 0-8.25-3.615-8.25-8.25S7.365 3.75 12 3.75s8.25 3.615 8.25 8.25-3.615 8.25-8.25 8.25zm0-15.75c-4.145 0-7.5 3.355-7.5 7.5s3.355 7.5 7.5 7.5 7.5-3.355 7.5-7.5-3.355-7.5-7.5-7.5z"
                      />
                    </svg>
                    <span>{post.comments}</span>
                  </p>
                </div>

                <p className="font-sans text-base text-gray-700 leading-snug">
                  {post.caption}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
