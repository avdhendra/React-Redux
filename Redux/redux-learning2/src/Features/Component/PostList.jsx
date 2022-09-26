import React, { useEffect } from "react";
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from "../Slice/postsSlice";
import "../../css/postList.css";
import PostExcerpt from "./PostsExcerpt";
import { useDispatch, useSelector } from "react-redux";


function PostList() {
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);
  const dispatch = useDispatch();
  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  //sort the post according to the time
  let content;
  if (postStatus === 'loading') {
    content = <p>"Loading...."</p>;
  } else if (postStatus === 'succeeded') {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => (
      <PostExcerpt key={post.id} post={post} />
    ));
  } else if (postStatus === 'failed') {
    content = <p>{error}</p>;
  }
  return (
    <div>
      <h2>Posts</h2>
      {content}
    </div>
  );
}

export default PostList;
