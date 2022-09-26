import "./App.css";
import AddPostForm from "./Features/Component/AddPostForm";
import PostList from "./Features/Component/PostList";
import SinglePostPage from "./Features/Component/SinglePostPage";
import Layout from "./Components/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import EditPostForm from "./Features/Component/EditPostForm";
import UserList from "./Features/Performance/UserList";
import UserPage from "./Features/Performance/UserPage";

//index in route means it start page
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostList />} />
        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>

        <Route path="user">
          <Route index element={<UserList />} />
          <Route path=":userId" element={<UserPage />} />
        </Route>
        {/** catch all -replace with 404 component if you want */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
