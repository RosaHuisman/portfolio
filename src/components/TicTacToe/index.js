import React, { useState, useEffect, useCallback } from 'react';
import './style.scss';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const checkWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const findBestMove = useCallback((squares) => {
    // Check for immediate win
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === null) {
        let copy = squares.slice();
        copy[i] = 'O';
        if (checkWinner(copy) === 'O') return i;
      }
    }
  
    // Block the player's win
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === null) {
        let copy = squares.slice();
        copy[i] = 'X';
        if (checkWinner(copy) === 'X') return i;
      }
    }
  
    // Take center if available
    if (squares[4] === null) return 4;
  
    // Take a corner if available
    const corners = [0, 2, 6, 8];
    for (let corner of corners) {
      if (squares[corner] === null) return corner;
    }
  
    // Take any remaining square
    return squares.findIndex(cell => cell === null);
  }, []);
  
  const computerMove = useCallback(() => {
    if (!checkWinner(board)) {
      const bestMove = findBestMove(board);
      const newBoard = board.slice();
      newBoard[bestMove] = 'O';
      setBoard(newBoard);
      setIsXNext(true);
    }
  }, [board, findBestMove]);
  
  useEffect(() => {
    if (!isXNext && !checkWinner(board)) {
      const timer = setTimeout(computerMove, 500);
      return () => clearTimeout(timer);
    }
  }, [isXNext, board, computerMove]);
  

  const handleClick = (index) => {
    if (board[index] || checkWinner(board) || !isXNext) return;

    const newBoard = board.slice();
    newBoard[index] = 'X';
    setBoard(newBoard);
    setIsXNext(false);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const winner = checkWinner(board);
  const status = winner ? `Gagnant: ${winner}` : board.includes(null) ? `Prochain joueur: ${isXNext ? 'X' : 'O (Ordinateur)'}` : "Match nul !";

  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      <div className="status">{status}</div>
      <div className="board">
        {board.map((cell, index) => (
          <button key={index} className="cell" onClick={() => handleClick(index)}>
            {cell}
          </button>
        ))}
      </div>
      <button className="reset" onClick={handleReset}>Recommencer</button>
    </div>
  );
};

export default TicTacToe;
