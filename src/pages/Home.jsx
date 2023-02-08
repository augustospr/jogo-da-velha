import React, { useEffect } from "react";
import { useState } from "react";

export default function Home() {

  const winningCombinations = [
    // horizontals
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    // verticals
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    // diagonals
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [gameData, setGameData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [turn, setTurn] = useState(1);
  const [winningCombo, setWinningCombo] = useState(null);

  const handleClick = (clickedIndex) => {

    if (gameData[clickedIndex] !== 0) { // Se caso o index for diferente de 0, ele quebra e não deixa mais o usuário clicar.
      return;
    }
    if(winningCombo) {
      return;
    }

    setGameData((prev) => {
      const newGameData = [...prev];
      newGameData[clickedIndex] = turn; // Clonou o State principal para modificar ele.
      return newGameData;
    });

    setTurn((prev) => prev === 1 ? 2 : 1); // Se caso o state for 1 ele troca pra 2, se não ele troca pra 1.

  };

  
  useEffect(() => {
    checkWinner();
    checkGameEnded();
  }, [gameData]);

  useEffect(() => {
    if(winningCombo){
      alert('Jogo teve um vencedor.')
    }
  }, [winningCombo])

  const checkGameEnded = () => {
    if(gameData.every((item) => item !== 0)) {
      alert("Jogo acabou. Deu velha!");
    }
  }

  const checkWinner = () => {

    let winner = null;

    for (let values of winningCombinations) {
      // console.log(values);

      if (
        gameData[values[0]] === 1 &&
        gameData[values[1]] === 1 &&
        gameData[values[2]] === 1) {
        winner = "player1";
      }
      if (
        gameData[values[0]] === 2 &&
        gameData[values[1]] === 2 &&
        gameData[values[2]] === 2) {
        winner = "player2";
      }
      if (winner) {
        setWinningCombo(values);
        break;
      }
    }

    console.log(winner);
  }

  return (
    <>
      <div className="board-game">
        {gameData.map((value, index) => (
          <span className="abbr" onClick={() => { handleClick(index); }}
            key={index}
          >
            <abbr title="">{index}</abbr>
            {value === 1 && "X"}
            {value === 2 && "O"}
          </span>
        ))}
      </div>
    </>
  )
}
