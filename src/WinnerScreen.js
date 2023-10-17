const WinnerScreen = ({ restartGame, playerWon }) => {
    return (
      <div className="winner">
        <h2 className="congratulations">
          {playerWon === "no one "
            ? "Oops! It's a draw"
            : "Congratulations!"}
        </h2>
        <h3 className="player">
          {playerWon} Won the game
        </h3>
        <button onClick={restartGame}>
          Restart
        </button>
      </div>
    );
  };
  
  export default WinnerScreen;
  