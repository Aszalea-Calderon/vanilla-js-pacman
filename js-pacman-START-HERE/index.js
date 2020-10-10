
import{LEVEL, OBJECT_TYPE}from './setup';
//Classes
import GameBoard from './GameBoard';
import Pacman from './Packman';

//DOM Elements-- What do DOM Document Object Model's do?

//These are referencing Items in setup that were setup ahead of time so that we could work in the object
const gameGrid = document.querySelector('#game');
const scoreTable = document.querySelector('#score');
const startButton = document.querySelector('#start-button')

//Game Constants
const POWER_PILL_TIME = 10000;//This is 10 seconds, however it is written in milliseconds
const GLOBAL_SPEED = 80;//global speed for the game loop??? also written in milliseconds... maybe how many times the functions run per millisecond
const gameBoard = GameBoard.createGameBoard(gameGrid,LEVEL);





//Initial setup. 
let score = 0 //The game starts at 0 points
let timer = null; //Currently there is no timer to reference so it is set to null
let gameWin = false;// This triggers when the game wins
let powerPillActive = false;//This is used when pacman actually eats the power-up pill
let powerPillTimer = null;//This is so that he doesn't get stuck infinitely in power-up mode. This is the exit.

//Functions to make the game actually work
function gameOver(pacman, grid){//Remembering how functions work, add in pacman, and the grid because things happen within the grid

}

function checkCollision(pacman, ghosts){

}

function gameLoop(pacman, ghosts){
  gameBoard.moveCharacter(pacman);

}

function startGame(){//This does not require paramiters a game start running\
  gameWin = false;
  powerPillActive = false;
  score = 0;

  startButton.classList.add('hide');

  gameBoard.createGrid(LEVEL);

  const pacman = new Pacman (2,287);
  gameBoard.addObject(287,[OBJECT_TYPE.PACMAN]);
  document.addEventListener('keydown', (e) =>
  pacman.handleKeyInput(e, gameBoard.objectExist) );

  timer = setInterval(() => gameLoop(pacman), GLOBAL_SPEED);
}

//initalize Game
startButton.addEventListener('click', startGame);


