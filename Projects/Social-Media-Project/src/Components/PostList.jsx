import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import { useContext, useEffect, useState } from "react";
import WelcomeMessage from "./WelcomeMessage";
import LoadSpinner from "./LoadSpinner";

function PostList() {
  const { postList, fetching } = useContext(PostListData);

  return (
    <>
      {fetching && <LoadSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
}

export default PostList;
