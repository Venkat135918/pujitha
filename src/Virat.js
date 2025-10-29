import React, { useEffect, useRef } from "react";
import "./Virat.css";
import Img from "./Components/Images/m1.jpg";
import img from "./Components/Images/m2.jpg";
import img1 from "./Components/Images/m3.jpg";
import bg from "./Components/Images/bg.jpeg";
import heart from "./Components/Images/fri.jpg";
import paperImg from "./Components/Images/paper.webp";

const Card = () => {
  const papersRef = useRef([]);
  let highestZ = 1;

  useEffect(() => {
    // Initialize drag functionality for each paper
    papersRef.current.forEach((paper, index) => {

      if (paper) {
        const paperState = {
          holdingPaper: false,
          prevMouseX: 0,
          prevMouseY: 0,
          mouseX: 0,
          mouseY: 0,
          velocityX: 0,
          velocityY: 0,
          currentX: 0,
          currentY: 0,
        };

        const mouseDownHandler = (e) => {
          if (e.button === 0) {
            paperState.holdingPaper = true;
            paper.style.zIndex = highestZ++;
            paperState.prevMouseX = e.clientX;
            paperState.prevMouseY = e.clientY;
          }
        };

        const mouseMoveHandler = (e) => {
          paperState.mouseX = e.clientX;
          paperState.mouseY = e.clientY;

          if (paperState.holdingPaper) {
            paperState.velocityX = paperState.mouseX - paperState.prevMouseX;
            paperState.velocityY = paperState.mouseY - paperState.prevMouseY;

            paperState.currentX += paperState.velocityX;
            paperState.currentY += paperState.velocityY;

            paperState.prevMouseX = paperState.mouseX;
            paperState.prevMouseY = paperState.mouseY;

            paper.style.transform = `translateX(${paperState.currentX}px) translateY(${paperState.currentY}px)`;
          }
        };

        const mouseUpHandler = () => {
          paperState.holdingPaper = false;
        };

        paper.addEventListener("mousedown", mouseDownHandler);
        document.addEventListener("mousemove", mouseMoveHandler);
        window.addEventListener("mouseup", mouseUpHandler);

        return () => {
          paper.removeEventListener("mousedown", mouseDownHandler);
          document.removeEventListener("mousemove", mouseMoveHandler);
          window.removeEventListener("mouseup", mouseUpHandler);
        };
      }
    });
  }, []);

  return (
    <div
      className="Card"
      style={{
        position:"relative",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        height: "110vh",
        width:"220vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="paper heart" style={{ backgroundImage: `url(${heart})`,width:200,}}
        ref={(el) => (papersRef.current[0] = el)}></div>
      {/* <div className="paper image" style={{backgroundImage: `url(${paperImg})`}}
        ref={(el) => (papersRef.current[1] = el)}>
        <p>Good luck</p>
        <p>Be Happy </p>
        <img src={img} alt="" />
      </div> */}
      {/* <div className="paper image" style={{ backgroundImage: `url(${paperImg})`}}ref={(el) => (papersRef.current[2] = el)}>
        <img src={Img} alt="" /> 
      </div> */}
      <div className="paper" style={{ backgroundImage: `url(${paperImg})`, }}ref={(el) => (papersRef.current[3] = el)}>
        <p>Pujitha</p>
        {/* <p>Cute</p>
        <img src={img1} alt="" /> */}
      </div>
      <div className="paper" style={{ backgroundImage: `url(${paperImg})`,}}ref={(el) => (papersRef.current[4] = el)}>
        <p>Happy birthday </p>
      </div>
      <div className="paper" style={{backgroundImage: `url(${paperImg})`,}}ref={(el) => (papersRef.current[5] = el)}>
        <p>Good luck</p>
        <p>Be Happy </p>
      </div>
      <div className="paper" style={{backgroundImage: `url(${paperImg})`,}}
        ref={(el) => (papersRef.current[6] = el)}>
        <p>Drag the paper to move</p>
      </div>
    </div>
  );
};

export default Card;
