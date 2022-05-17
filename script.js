let chessPieces = ["♟︎", "♘", "♟︎", "♘", "♟︎", "♝", "♟︎", "♝", "♜", "♟︎", "♟︎", "♜", "♕", "♔", "♟︎", "♟︎"]
let pawnShelf = document.getElementById("pawn-shelf")
let minorPiecesShelf = document.getElementById("minorpieces-shelf")
let rookShelf = document.getElementById("rook-shelf")
let royalShelf = document.getElementById("royal-shelf")


function sortPieces() {
  for (let i =0 ; i < chessPieces.length; i++) {
    if (chessPieces[i]) === "♟︎") {
      pawnShelf.textContent += "♟︎"
    } else if (chessPieces[i] === "♘" || chessPieces[i] === "♝") {
      minorPiecesShelf.textContent += 
    }
    

}
}



sortPieces()


 //pawnShelf.textContent += chessPieces[0]
  //minorPiecesShelf.textContent += chessPieces[1]
  //rookShelf.textContent += chessPieces[4]
  //royalShelf.textContent += chessPieces[i]



// for 
// if 
// getElement
// textContent
// String concat
// comparisons

let Array = [1, 7, 2, 8, 3, 4, 5, 0, 9];

for (let i = 1; i < Array.length; i++)
    for (let j = 0; j < i; j++)
        if (Array[i] < Array[j]) {
          let x = Array[i];
          Array[i] = Array[j];
          Array[j] = x;
        }

console.log(Arr);