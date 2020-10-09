
import{LEVEL, OBJECT_TYPE}from './setup';

//DOM Elements-- What do DOM Document Object Model's do?

//These are referencing Items in setup that were setup ahead of time so that we could work in the object
const gameGrid = document.querySelector('#game');
const scoreTable = document.querySelector('#score');
const startButton = document.querySelector('#start-button')

//Game Constants
const POWER_PILL_TIME = 10000;//This is 10 seconds, however it is written in milliseconds
const GLOBAL_SPEED = 80;//global speed for the game loop??? also written in milliseconds... maybe how many times the functions run per millisecond


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

}

function startGame(){//This does not require paramiters a game start running

}
