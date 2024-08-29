"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
export default function Home() {
  const [posts, setPosts] = useState([]);
  const inputRef = useRef("");
  const [search, setSearch] = useState(false);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/posts")
      .then((res) => res.json())
      .then((res) => {
        setPosts(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const searchPost = (e) => {
    //for every eventlisteners we have Event
    if (e.type == "keydown" && e.key !== "Enter") 
      return;
    setSearch(true);
    fetch(
      process.env.NEXT_PUBLIC_API_URL + "/posts?q=" + inputRef.current.value
    )
      .then((res) => res.json())
      .then((res) => {
        setPosts(res);
        // console.log(res);
      })
      .catch((err) => console.log(err))
      .finally(() => setSearch(false));
  };
  return (
    <div className="mb-10">
      <main className="container mx-auto px-4 py-6">
        <h2 className="text-4xl font-bold mb-4">Welcome to Our Blog</h2>
        <p>MY NeXt Blog</p>
      </main>
      <div className="flex justify-end px-2">
        <input
          type="text"
          className="px-2 border border-gray-300 rounded-md"
          placeholder="Search..."
          ref={inputRef}
          onKeyDown={searchPost}
        />
        <button
          className={`px-4 py-2 ${
            search ? "bg-red-500" : "bg-blue-500"
          } text-white rounded-md ml-4`}
          onClick={searchPost}
          disabled={search}
        >
          {search ? "..." : "Search"}
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.length > 0 &&
          posts.map((post,i) => (
            <div key={i}>
              <Link href={"/post/" + post._id}>
              <div className="border border-gray-200 p-4">
                <img
                  className="w-full h-48 object-cover mb-4"
                  src={post.image}
                  alt="Post Image"
                />
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600">{post.short_description}</p>
              </div>
            </Link>
              </div>
          ))}
        {posts.length == 0 && inputRef.current.value && (
          <p className="text-center">
            No post Available for this query:<b>{inputRef.current.value}</b>
          </p>
        )}
      </div>
    </div>
  );
}
