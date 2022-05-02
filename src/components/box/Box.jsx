
import "./Box.css"
const Box = (props) => {

  const { box } = props;
  let state = "";

  if(box?.state=="exist"){
    state= "exist"
  }else if(box?.state=="exact"){
    state = "exact"
  }else if(box?.state=="no"){
    state = "no"
  }



  return (
    <div className={`box ${state}`}>
      {box?.letter?box?.letter.toUpperCase():""}
    </div>
  )
}

export default Box