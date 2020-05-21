import React, { createRef, useState } from "react";

const ref = createRef();

export default function() {
  const [position, setPosition] = useState({
    x: 0.5,
    y: 0.5
  });
  const [start, setStart] = useState({
    x: 0,
    y: 0
  });
  const [drag, setDrag] = useState(null);
  // const [zoom, setZoom] = useState(1);

  const handleMouseDown = ev => {
    // console.log("onMouseDown");
    setStart(position);
    const mouseOrTouch = ev.touches && ev.touches.length ? ev.touches[0] : ev;
    setDrag({
      x: mouseOrTouch.clientX,
      y: mouseOrTouch.clientY
    });
  };

  const handleMouseMove = ev => {
    if (drag) {
      const mouseOrTouch = ev.touches && ev.touches.length ? ev.touches[0] : ev;

      setPosition({
        x: Math.min(
          1,
          Math.max(
            0,
            start.x - (mouseOrTouch.clientX - drag.x) / ref.current.clientWidth
          )
        ),
        y: Math.min(
          1,
          Math.max(
            0,
            start.y - (mouseOrTouch.clientY - drag.y) / ref.current.clientHeight
          )
        )
      });
    }
  };

  const handleMouseUp = () => {
    // console.log("onMouseUp");
    setDrag(null);
  };

  // const handleWheel = () => {}

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
        backgroundColor: "#8b6f4f",
        backgroundImage:
          "url(https://upload.wikimedia.org/wikipedia/commons/7/7e/Pieter_Brueghel_the_Elder_-_The_Dutch_Proverbs_-_Google_Art_Project.jpg), url(https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Pieter_Brueghel_the_Elder_-_The_Dutch_Proverbs_-_Google_Art_Project.jpg/320px-Pieter_Brueghel_the_Elder_-_The_Dutch_Proverbs_-_Google_Art_Project.jpg)",
        backgroundPositionX: `${position.x * 100}%`,
        backgroundPositionY: `${position.y * 100}%`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchEnd={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchMove={handleMouseMove}
      ref={ref}
    ></div>
  );
}
