import { useState } from "react";
import { PostComponent } from "./post";
function App() {
  const [posts,setposts] = useState([]);
  const postComponents=posts.map(post=><PostComponent
  name = {post.name}
  subTitle = {post.subTitle}
  time = {post.time}
  image = {post.image}
  description = {post.description}
  />);
  function addPost(){
    setposts([...posts,{
      name : "Dolphin",
        subTitle : "1k Followers",
        time : "1 min ago",
        image : "https://cdn.pixabay.com/photo/2025/05/24/12/40/whale-9619752_640.png",
        description : "You guys don't even know my pain.. I am tired of swimming.. I want to walk now"
    }])
  }
  return (
    <div style={{ background: "#ecf0f1", height: "100vh"}}>
      <button onClick={addPost}>Add Post</button>
      <div style = {{fontFamily: "system-ui", display: "flex", justifyContent: "center" }}>
        <div>
          {postComponents}
        </div>
      </div>
    </div>
  );
}





export default App;
