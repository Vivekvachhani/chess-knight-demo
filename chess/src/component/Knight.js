import React from "react";
import { DragPreviewImage, useDrag } from "react-dnd";
import knightImage from "./KnightImage";
import { ItemTypes } from "../ItemTypes";

const knightStyle = {
  fontSize: 60,
  fontWeight: "bold",
  textAlign: "center",
  lineHeight: "4rem",
  cursor: "move"
};
const Knight = () => {
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: ItemTypes.KNIGHT },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });
  return (
    <>
      <DragPreviewImage connect={preview} src={knightImage} />
      <div
        ref={drag}
        style={{
          ...knightStyle,
          opacity: isDragging ? 0.5 : 1
        }}
      >
        ♘
      </div>
    </>
  );
};
export default Knight;
