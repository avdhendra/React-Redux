import React, { useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../Slice/userSlice";
import { postAdded } from "../Slice/postsSlice";
import "../../css/AddPostForm.css";

function AddPostForm() {
  const dispatch = useDispatch();
  const firstRef = useRef(null);
  const contentRef = useRef(null);
  const userRef=useRef(null)
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId,setUserId]=useState("")
  const users=useSelector(selectAllUsers)
  const onSavePostClicked = (e) => {
    e.preventDefault();
    setTitle(firstRef.current.value);
    setContent(contentRef.current.value);
    setUserId(userRef.current.value);
    if (title && content) {
      // dispatch(
      //     postAdded({
      //         id:nanoid(),
      //         title,
      //         content,
      //     })
      // )
      dispatch(postAdded(title, content,userId));
      setTitle("");
      setContent("");
    }
  };
  
  const userOptions=users.map(user=>(
    <option key={user.id} value={user.id}>
        {user.name}
    </option>
  ))
  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title: </label>
        <input type="text" id="postTitle" name="postTitle" ref={firstRef} />
        <label htmlFor="postAuthor">Author: </label>
        <select id='postAuthor' ref={userRef}>
            <option value=''></option>
            {userOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea id="postContent" name="postContent" ref={contentRef} />
        <button type="submit"  onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </section>
  );
}

export default AddPostForm;
