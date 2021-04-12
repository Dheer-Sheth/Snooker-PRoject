class Form {

    constructor() {
      this.inputName = createInput("Name");
      this.inputAge = createInput("Enter your Age");
      this.button = createButton('Play');
      this.title = createElement('h2');
      //this.resetButton= createButton("Reset");
    }
    hide(){
      //this.greeting.hide();
      this.button.hide();
      this.inputName.hide();
      this.inputAge.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("Snooker Game With Math");
      this.title.position(displayWidth/2 - 50, 0);
  
      this.inputName.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.inputAge.position(displayWidth/2 - 40 , displayHeight/2 - 40);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
  
  //this.resetButton.position(displayWidth/2, displayHeight/2-50);
  
      this.button.mousePressed(()=>{
        //this.input.hide();
        //this.button.hide();
        playerName = this.inputName.value();
        playerAge = this.inputAge.value();
        gameState= 1;
    
        /*playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);*/
        //this.greeting.html("Hello " + player.name)
        //this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
  
      /*this.resetButton.mousePressed(()=>{
        game.update(0);
        player.updateCount(0);
        Player.updatecarsAtEnd(0);
        
  
      }                ); */
  
    }
  }
  