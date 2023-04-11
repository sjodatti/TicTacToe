import React from "react";
import Squere from "./Squere";

const Board = () => {
  const [boardValues, setBoardValues] = React.useState(new Array(9).fill(null));
  const [xTurn, setXTurn] = React.useState(false);

  const onClickHandler = (index: number) => {
    const copyArr = [...boardValues];
    copyArr[index] = xTurn ? "X" : "O";
    setBoardValues(copyArr);
    setXTurn(!xTurn);
  };

  const checkWinner = () => {
    const indexArr = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const arr of indexArr) {
      const [a, b, c] = [...arr];
      if (
        boardValues[a] !== null &&
        boardValues[a] === boardValues[b] &&
        boardValues[a] === boardValues[c]
      ) {
        return true;
      }
    }
    return false;
  };

  const winner = checkWinner();
  return (
    <div className="board">
      {winner ? (
        `${!xTurn ? "X" : "O"} is winner`
      ) : (
        <>
          <div className="board-row">
            <Squere
              onClickHandler={() => onClickHandler(0)}
              value={boardValues[0]}
            />
            <Squere
              onClickHandler={() => onClickHandler(1)}
              value={boardValues[1]}
            />
            <Squere
              onClickHandler={() => onClickHandler(2)}
              value={boardValues[2]}
            />
          </div>
          <div className="board-row">
            <Squere
              onClickHandler={() => onClickHandler(3)}
              value={boardValues[3]}
            />
            <Squere
              onClickHandler={() => onClickHandler(4)}
              value={boardValues[4]}
            />
            <Squere
              onClickHandler={() => onClickHandler(5)}
              value={boardValues[5]}
            />
          </div>
          <div className="board-row">
            <Squere
              onClickHandler={() => onClickHandler(6)}
              value={boardValues[6]}
            />
            <Squere
              onClickHandler={() => onClickHandler(7)}
              value={boardValues[7]}
            />
            <Squere
              onClickHandler={() => onClickHandler(8)}
              value={boardValues[8]}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
