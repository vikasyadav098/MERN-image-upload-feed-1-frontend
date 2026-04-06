import React, { useEffect, useState } from "react";

import api from "../api/axios";
const Feed = () => {
  const [posts, setPosts] = useState([
    {
      _id: "1",
      image:
        "https://images.unsplash.com/photo-1775133117908-99043faa40b0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
      caption: "nature",
    },
  ]);

  useEffect(()=>{
console.log("API calling...");

   

api.get("/posts")
    .then((res)=>{
        setPosts(res.data.posts);
        
    })
  },[])
  return (
    <div>
      <section className="feed-section">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post._id} className="post-card">
              <img src={post.image} alt={post.caption} />
              <p>{post.caption}</p>
            </div>
          ))
        ) : (
          <h1>No Posts Available</h1>
        )}
      </section>
      
    </div>
  );
};

export default Feed;
