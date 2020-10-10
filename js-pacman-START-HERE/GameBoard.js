//This is the gameboard class

import{GRID_SIZE, CELL_SIZE, OBJECT_TYPE, CLASS_LIST,}from './setup';

class GameBoard{//This is a constructor function, it will be used to make things happen in the game
  constructor(DOMGrid){//This will make things for us. 
    this.dotCount = 0;
    this.grid = [];
    this.DOMGrid = DOMGrid;
  }//We need a method to call things
  showGameStatus(gameWin){//Shows if you winning or not
    const div = document.createElement('div');
    div.classList.add('game-status');
    div.innerHTML=`${gameWin ? 'WIN!' : 'GAME OVER!'}`;
    this.DOMGrid.appendChild(div);
  }

  createGrid(level){//This produces the level.
    this.dotCount = 0;//This wipes out the old counter for dots and starts it over. 
    this.grid=[];//this will be the array that is in the beginning
    this.DOMGrid.innerHTML = '';//tHis wipes out all info in the DOM
    this.DOMGrid.style.cssText = `grid-template-columns:repeat(${GRID_SIZE}, ${CELL_SIZE}px)`;

    level.forEach((square) => {//This is a loop 
      const div = document.createElement('div');
      div.classList.add('square',CLASS_LIST[square]);//This goes to our list of items that we set up before, and references the index of the map we made before
      div.style.cssText =`width: ${CELL_SIZE}px; height ${CELL_SIZE}px; `//This the style updates
      this.DOMGrid.appendChild(div);
      this.grid.push(div);

      if(CLASS_LIST[square] === OBJECT_TYPE.DOT) this.dotCount++;
    })
  }

  addObject(pos, classes){//This is to add things, We add it to the object
    this.grid[pos].classList.add(...classes);
  }

  removeObject(pos, classes){//This removes things
    this.grid[pos].classList.remove(...classes);
  }

  objectExist(pos, object){
  return this.grid[pos].classList.contains(object);}

  rotateDiv(pos,deg){//This is used to rotate packman on the grid, pos is position, deg is degree of rotaion
    this.grid[pos].style.transform = `rotate (${deg}deg)`;//${deg} is the parameter, deg is the css being applied
  }
  
}
