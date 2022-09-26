import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectAllUsers } from '../Slice/userSlice'


function PostAuthor({userId}) {
  
    const users=useSelector(selectAllUsers)
    const author=users.find(user=>user.id===userId)
    return <span>by{author? <Link to={`/user/${userId}`}>{author.name}</Link>:"Unknown Author"}</span>
  
}

export default PostAuthor