"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setPosts(data.data); // Adjust based on the API response structure
        }
      })
      .catch((err) => setError("Failed to fetch posts"));
  }, []);
  console.log(posts);
  return (
    <div>
      <h1>Newsletter Posts</h1>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={post.web_url} target="_blank" rel="noopener noreferrer">
              {post.title}
              <Image src={post.thumbnail_url} width={100} height={100}></Image>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
