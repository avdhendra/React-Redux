import React from 'react'
import { useSelector } from 'react-redux'
import {selectAllPosts} from '../Slice/postsSlice'
import "../../css/postList.css"
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButton from './ReactionButton'
function PostList() {
    const posts=useSelector(selectAllPosts)
    //sort the post according to the time
    const orderedPost=posts.slice().sort((a,b)=>b.date.localeCompare(a.date))
    const renderedPosts=orderedPost.map(post=>(
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
            <p className='postCredit'>
                <PostAuthor userId={post.userId}/>
                <TimeAgo timestamp={post.date}/>
            </p>
            <ReactionButton post={post}/>
        </article>
    ))
  return (
    <div>
        <h2 >Posts</h2>
        {renderedPosts}
        </div>
  )
}

export default PostList