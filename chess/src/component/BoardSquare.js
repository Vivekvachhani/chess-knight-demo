import React from "react";
import { useDrop } from "react-dnd";
import { canMoveKnight, moveKnight } from "../Game";
import { ItemTypes } from "../ItemTypes";
import Square from "./Square";
import Overlay from "./overlay";

const boardSquareStyle = {
  position: "relative",
  width: "100%",
  height: "100%"
};
const BoardSquare = ({ x, y, children }) => {
  const black = (x + y) % 2 === 1;
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ItemTypes.KNIGHT,
    drop: () => moveKnight(x, y),
    canDrop: () => canMoveKnight(x, y),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    })
  });
  return (
    <div ref={drop} style={boardSquareStyle}>
      <Square black={black}>{children}</Square>
      {isOver && !canDrop && <Overlay color="red" />}
      {!isOver && canDrop && <Overlay color="yellow" />}
      {isOver && canDrop && <Overlay color="green" />}
    </div>
  );
};
export default BoardSquare;
