
import './App.css';
import AddPostForm from './Features/Component/AddPostForm';
import PostList from './Features/Component/PostList';
//import Counter from './Features/Component/Counter';
function App() {
  return (
    <div className="app">
      {/* <Counter/> */}
      <AddPostForm/>
<PostList/>
    </div>
  );
}

export default App;
