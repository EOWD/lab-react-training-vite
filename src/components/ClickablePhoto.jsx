import  { useState } from "react";
import img2 from "../assets/images/glasses.png";
import img1 from "../assets/images/Img2.jpg";
export function Clickable() {
  const [isImg1Visible, setIsImg1Visible] = useState(true);
  const toggleImage = () => {
    setIsImg1Visible(!isImg1Visible);
  };
  return(  <div style={{ position: "absolute" }} onClick={toggleImage}>
    <img
      src={img1}
      alt="Image 1"
      className={`image `} 
    />
    <img style ={{height:'200px', width:'250px', marginTop:'90px', marginLeft:'120px'}}
      src={img2}
      alt="Image 2"
      className={`image ${isImg1Visible ? "hidden" : ""}` }

    />
    
  </div>)
}
