import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";
import {Link} from 'react-router-dom'
import React from "react";
import { useSelector } from "react-redux";
import { selectPostById } from "../Slice/postsSlice";

//when we hit on emoji it re render all the list element again and again as we click on emoji buttton
//so we can memo the list and render when only the post change

// let PostsExcerpt=({post})=>{
//     return (
//         <article >
//         <h3>{post.title}</h3>
//         <p className="excerpt">{post.body.substring(0, 75)}...</p>
//         <p className="postCredit">
//           <Link to={`post/${post.id}`}>View Post </Link>
//           <PostAuthor userId={post.userId} />
//           <TimeAgo timestamp={post.date} />
//         </p>
//         <ReactionButton post={post} />
//       </article>
//     )
// }
// PostsExcerpt=React.memo(PostsExcerpt)
const PostsExcerpt=({postId})=>{
  const post=useSelector(state=>selectPostById(state,postId))
  return (
      <article >
      <h3>{post.title}</h3>
      <p className="excerpt">{post.body.substring(0, 75)}...</p>
      <p className="postCredit">
        <Link to={`post/${post.id}`}>View Post </Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButton post={post} />
    </article>
  )
}

export default PostsExcerpt;
//Normalization
//Recommended in docs
//No duplication of data
//Create an Id lookUp



//CreateEntityAdapter Api
//Abstracts more logic from
//Built in CRUD method
//Automatic selector generation
