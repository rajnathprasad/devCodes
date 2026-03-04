function App() {
  return (
    <div style={{ background: "#ecf0f1", height: "100vh"}}>
      <div style = {{fontFamily: "system-ui", display: "flex", justifyContent: "center" }}>
        <div>
        <div style={{padding : 2}}><PostComponent /></div>
        <div style={{padding : 2}}><PostComponent /></div>
        <div style={{padding : 2}}><PostComponent /></div>
        </div>
      </div>
    </div>
  );
}

const style = {
  width: 300,
  backgroundColor: "white",
  border: "1px solid gray",
  borderRadius: 10,
  height : "100%"
};

function PostComponent() {
  return (
    <div style={style}>
      <div style={{ display: "flex", margin: "10px" }}>
        <img
          src={
            "https://cdn.pixabay.com/photo/2025/05/24/12/40/whale-9619752_640.png"
          }
          style={{ width: 40, height: 40, borderRadius: "50%" }}
        />
        <div style={{ fontSize: 12, marginLeft: 8 }}>
          <b>Dolphin</b>
          <div style={{ color: "#7f8c8d", fontSize: 9, lineHeight:1}}>
            <div>1000 followers</div>
            <div>1 minute ago</div>
          </div>
        </div>
      </div>
      <div style={{ fontSize: "13px" , margin : 7}}>
        You guys don't even know my pain.. I am tired of swimming.. I want to
        walk now
      </div>
    </div>
  );
}

export default App;
