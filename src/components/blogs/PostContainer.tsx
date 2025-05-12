import { IPost } from "@/types/post";
import React, { useRef } from "react";
import PostCard from "./PostCard";

interface PostContainerPops {
  posts: IPost[];
}
const PostContainer = ({ posts }: PostContainerPops) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    posts &&
    posts.length > 0 && (
      <section ref={sectionRef} className="py-4 space-y-3" id="postContainer">
        <div>
          <PostCard
            index={0}
            post={posts[0]}
            sectionRef={sectionRef}
            orientation="horizontal"
          />
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(1, posts.length).map((post, index) => (
            <PostCard
              key={post.slug}
              index={index}
              post={post}
              sectionRef={sectionRef}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default PostContainer;
