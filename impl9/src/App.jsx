function App() {
  return (
    <div>
      <PostComponent/>
    </div>
  )
}

const style = {width : 200, backgroundColor : "white", border : "1px solid gray", display : "flex"}

function PostComponent(){
  return (
  <div style={style}>
    <img src={"https://cdn.pixabay.com/photo/2025/05/24/12/40/whale-9619752_640.png"} style={
      {width:40,
      height:40,
      borderRadius :"50%"}
    }/>
    <div>
      <b>Dolphin</b>
      <div>1000 followers</div>
      <div>1 minute ago</div>
      <div>You guys don't even know my pain.. I am tired of swimming.. I want to walk now</div>
    </div>
  </div>
  )
}

export default App
