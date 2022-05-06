import React from "react";
import BoardSquare from "./BoardSquare";
import Knight from "./Knight";

const boardStyle = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexWrap: "wrap"
};
const squareStyle = { width: "12.5%", height: "12.5%" };
const Board = ({ knightPosition: [knightX, knightY] }) => {
  const renderSquare = i => {
    const x = i % 8;
    const y = Math.floor(i / 8);
    return (
      <div key={i} style={squareStyle}>
        <BoardSquare x={x} y={y}>
          {renderPiece(x, y)}
        </BoardSquare>
      </div>
    );
  };
  const renderPiece = (x, y) => {
    const isKnightHere = knightX === x && knightY === y;
    return isKnightHere ? <Knight /> : null;
  };
  const squares = Array.from(new Array(64), (element, index) =>
    renderSquare(index)
  );
  return <div style={boardStyle}>{squares}</div>;
};
export default Board;
