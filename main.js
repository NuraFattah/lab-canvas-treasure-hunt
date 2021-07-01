// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

// Iteration 1
function drawGrid() {
   

/*function drawGrid() {
    context.beginPath(0, 0);
    context.moveTo(100, 100);
    context.lineTo(2000,100);
    context.stroke();
    context.closePath();
    context.fillStyle= "black";
    context.fill();
     }*/
    
context.beginPath();

    for (let i=5; i<=600; i=i+50){
      context.moveTo(i,5);
      context.lineTo(i,600);
      context.moveTo(5,i);
      context.lineTo(600,i);


      context.strokeStyle="black";
      context.stroke();
    }
}

const player = new Character(0, 0); // (0,0) = Initial position

player.moveDown(); // Increase by 1 the value of player.row
player.moveDown(); // Increase by 1 the value of player.row
player.moveRight(); // Increase by 1 the value of player.col

console.log(player.col, player.row); // => 1,2

function drawEverything() {
  drawGrid();
  drawPlayer()
  drawTreasure()
}

drawEverything();