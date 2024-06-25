import React, { useEffect, useState } from "react";
import { Patterns } from "./Pattern";
import Square from "./Square";
import "./Ttt.css";

const TicTacToe = () => {
  // const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [board, setBoard] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({ winner: "none", state: "none" });

  useEffect(() => {
    // checkWin();
    // checkIfTie();

    // if (player === "X") {
    //   setPlayer("O");
    // } else {
    //   setPlayer("X");
    // }

    const checkGameState = () => {
      const winner = checkWin();
      if (winner) {
        setResult({ winner, state: "Won" });
        return;
      }

      if (checkIfTie()) {
        setResult({ winner: "No One", state: "Tie" });
      }
    };

    checkGameState();
    setPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [board]);

  useEffect(() => {
    if (result.state !== "none") {
      alert(`Game Finished! Winning Player: ${result.winner}`);
      restartGame();
    }
  }, [result]);

  const chooseSquare = (square) => {
    setBoard(
      board.map((val, idx) => {
        if (idx === square && val === "") {
          return player;
        }

        return val;
      })
    );
  };

  const checkWin = () => {
    Patterns.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]];
      if (firstPlayer === "") return;
      let foundWinningPattern = true;
      currPattern.forEach((idx) => {
        if (board[idx] !== firstPlayer) {
          foundWinningPattern = false;
        }
      });

      if (foundWinningPattern) {
        setResult({ winner: player, state: "Won" });
      }
    });
  };

  // const checkIfTie = () => {
  //   let filled = true;
  //   board.forEach((square) => {
  //     if (square === "") {
  //       filled = false;
  //     }
  //   });

  //   if (filled) {
  //     setResult({ winner: "No One", state: "Tie" });
  //   }
  // };

  const checkIfTie = () => {
    return board.every((square) => square !== "");
  };

  const restartGame = () => {
    setBoard(Array(9).fill(""));
    setPlayer("O");
  };

  const renderSquare = (index) => (
    <Square val={board[index]} chooseSquare={() => chooseSquare(index)} />
  );

  return (
    <div className="ttt">
      <div className="board">
        {[0, 1, 2].map((i) => (
          <div className="row" key={i}>
            {renderSquare(i * 3)}
            {renderSquare(i * 3 + 1)}
            {renderSquare(i * 3 + 2)}
          </div>
        ))}

        {/* <div className="row">
          <Square
            val={board[0]}
            chooseSquare={() => {
              chooseSquare(0);
            }}
          />
          <Square
            val={board[1]}
            chooseSquare={() => {
              chooseSquare(1);
            }}
          />
          <Square
            val={board[2]}
            chooseSquare={() => {
              chooseSquare(2);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={board[3]}
            chooseSquare={() => {
              chooseSquare(3);
            }}
          />
          <Square
            val={board[4]}
            chooseSquare={() => {
              chooseSquare(4);
            }}
          />
          <Square
            val={board[5]}
            chooseSquare={() => {
              chooseSquare(5);
            }}
          />
        </div>
        <div className="row">
          <Square
            val={board[6]}
            chooseSquare={() => {
              chooseSquare(6);
            }}
          />
          <Square
            val={board[7]}
            chooseSquare={() => {
              chooseSquare(7);
            }}
          />
          <Square
            val={board[8]}
            chooseSquare={() => {
              chooseSquare(8);
            }}
          />
        </div> */}
      </div>
    </div>
  );
};
export default TicTacToe;
