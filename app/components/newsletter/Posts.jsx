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
    <div className="mt-5">
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <div className="posts-grid">
        {posts.map((post) => {
          const publishDate = new Date(
            post.publish_date * 1000
          ).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          });

          return (
            <div className="post-item" key={post.id}>
              <Link
                href={post.web_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={post.thumbnail_url}
                  width={500}
                  height={100}
                  alt={post.title}
                />
                <p className="font-bold text-xl">{post.title}</p>
                <p className="date">{publishDate}</p>{" "}
                {/* Display formatted date */}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
