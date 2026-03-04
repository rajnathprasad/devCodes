const style = {
  width: 300,
  backgroundColor: "white",
  border: "1px solid gray",
  borderRadius: 10,
  margin : 2
};
export function PostComponent({name, subTitle,time, image, description}) {
  return (
    <div style={style}>
      <div style={{ display: "flex", margin: "10px" }}>
        <img
          src={
            image
          }
          style={{ width: 40, height: 40, borderRadius: "50%" }}
        />
        <div style={{ fontSize: 12, marginLeft: 8 }}>
          <b>{name}</b>
          <div style={{ color: "#7f8c8d", fontSize: 9, lineHeight:1}}>
            <div>{subTitle}</div>
            {(time!==undefined)?<div style={{display:"flex", alignItems:"center"}}>
              <div>{time}</div>
              <div><img src="https://icones.pro/wp-content/uploads/2022/07/icone-planete-terre-gris.png" alt="" style={{width:"9px", marginLeft:"2px"}} /></div>
            </div>:<div></div>}
          </div>
        </div>
      </div>
      <div style={{ fontSize: "13px" , margin : 7}}>
        {description}
      </div>
    </div>
  );
}