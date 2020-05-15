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
    setStart(position);
    setDrag({
      x: ev.clientX,
      y: ev.clientY
    });
  };

  const handleMouseMove = ev => {
    if (drag) {
      setPosition({
        x: Math.min(
          1,
          Math.max(0, start.x - (ev.clientX - drag.x) / ref.current.clientWidth)
        ),
        y: Math.min(
          1,
          Math.max(
            0,
            start.y - (ev.clientY - drag.y) / ref.current.clientHeight
          )
        )
      });
    }
  };

  const handleMouseUp = () => {
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
        backgroundImage: "url(Image.jpg), url(Image250.jpg)",
        backgroundPositionX: `${position.x * 100}%`,
        backgroundPositionY: `${position.y * 100}%`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      ref={ref}
    ></div>
  );
}
