
import './App.css';
import Square from "./component/Square"
import { useState, useEffect } from 'react';
import { Patterns } from './component/Patterns';
import WinnerScreen from './WinnerScreen';
function App() {

  
    //box index
    /* you can keep track of which player (e.g., "X" or "O") occupies
     each position on the board as the game progresses. When a player 
     makes a move, you can update the board state to reflect that
     move and re-render the component with the updated game board.*/
     const [board , setBoard]= useState(["","","","","","","","",""]);



// player turn
const [player, setPlayer]=useState("🟡")


// result 
const [result , setResult]= useState({ winner :"none" , state:"none"});


// check win 
const [wined , setWin ]= useState(false);

useEffect(()=> {

  checkwin ();
  checkIfTie();
if (player == "❌")
    {setPlayer("🟡");}
    else{
      setPlayer("❌");
    }

},[board]);

// render the winner 
useEffect(()=>{
  
  if(result.state != "none"){
    setWin(true);
    // alert(`game finished ! winning Player : ${result.winner}`)
    

  }
},[result]);

const handleCkick=(square)=>{
  setBoard(
    board.map((val,index)=>{
      if(index == square && val=="")
      {
        return player;
      }
      return val;
    })
  )
 }
 // checking winner
 const checkwin = () =>
 {
  Patterns.forEach((currentPattern)=>{
      // Get the value of the first square in the pattern
    const firstPlayer = board[currentPattern[0]];
    //If the first square is empty, move on to the next pattern
    if (firstPlayer == "") return ;
    let foundWinningPattern =true;
    currentPattern.forEach((index)=>{
       if (board[index] != firstPlayer){
        foundWinningPattern=false;
       }
      });
       if (foundWinningPattern){
       setResult ({ winner :player , state:"won"})
       }


  })
 }

//restart
const restartGame = () => {
  setBoard(["", "", "", "", "", "", "", "", ""]);
  setPlayer("🟡");
  setResult({ winner: "none", state: "none" });
  setWin(false);
}

//checking for tie
const checkIfTie =()=>{
  let filled = true ;
  board.forEach((square)=>
  {
    if (square == "")
    {
      filled =false;
    }
  });
  if(filled){
    setResult({winner :"no one" ,state:"tie"})
  }
}


  return (
    <div className="App">
      <div className="board">
        <h1>Tic-Tac-Toe</h1>
        <div className="row">
        <Square
        chooseSquare={()=>{handleCkick(0)}}
        val={board[0]}
        />
        <Square  chooseSquare={()=>{handleCkick(1)}}
       val={board[1]}
        />
        <Square
        chooseSquare={()=>{handleCkick(2)}}
        val={board[2]}
         />
        </div>
        <div className="row">
        <Square
        chooseSquare={()=>{handleCkick(3)}}
        val={board[3]}
        />
        <Square  chooseSquare={()=>{handleCkick(4)}}
       val={board[4]}
        />
        <Square
        chooseSquare={()=>{handleCkick(5)}}
        val={board[5]}
         />
        </div>
        <div className="row">
        <Square
        chooseSquare={()=>{handleCkick(6)}}
        val={board[6]}
        />
        <Square  chooseSquare={()=>{handleCkick(7)}}
       val={board[7]}
        />
        <Square
        chooseSquare={()=>{handleCkick(8)}}
        val={board[8]}
         />
        </div>
      </div>
        {wined ? (<WinnerScreen restartGame={restartGame}playerWon={result.winner}/>)  : null}
    </div>
  );
}

export default App;




/*val refers to the current value of the element being processed in the
 board array. In your array, each element corresponds to a position on a
  Tic-Tac-Toe board. The val variable, in this context, represents the
   content of the current square on the board. Initially, all squares are
    empty (represented by ""), but as the game progresses, you might 
    update val to "X" or "O" to indicate which player has made a move in
     that square.

index represents the index or position of the current element in the
 board array. In your example array, it ranges from 0 to 8, corresponding
  to the 9 positions on the Tic-Tac-Toe board. The index variable is
   useful for identifying and locating specific squares on the board,
    allowing you to determine which square the player interacts with or
     make decisions based on the position of the square. */