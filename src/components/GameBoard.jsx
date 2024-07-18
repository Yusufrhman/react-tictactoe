import { useState } from "react";


export default function GameBoard({ onSelectSquare, board }) {
  
  //   const [gameBoard, setGameBoard] = useState(initGameBoard);
  //   function handleSelect(rowIndex, colIndex) {
  //     setGameBoard((prevGameBoard) => {
  //       const updatedBoard = [...prevGameBoard.map((innerArray)=>[...innerArray])];
  //         updatedBoard[rowIndex][colIndex] = symbol;
  //         return updatedBoard;
  //     });
  //       onSelectSquare();
  //   }
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol != null ? true : false}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
