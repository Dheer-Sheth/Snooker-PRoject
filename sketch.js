const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint


var Myengine, Myworld;
var stick;
var ball1, ball2,ball3,ball4, ball5, ball6, ball7, ball8, ball9, ball10, ball11,
ball12, ball13,ball14,ball15

var form, gameState=0;
var playerName, playerAge
var stick 
var menubackground, gamebackground


function preload(){
    menubackground= loadImage("sprites/main_menu_background.png");
    gamebackground= loadImage("sprites/mainbackground.png");
    
}

function setup(){
    createCanvas(displayWidth-10, displayHeight-150);
    Myengine = Engine.create();
    Myworld = Myengine.World;
    //ball= new Balls(displayWidth/2, displayHeight/2);
    stick= new Stick(350,200);
    form= new Form();

    ball1= new Balls((displayWidth/2)-20,300,1)
    ball2= new Balls((displayWidth/2)-20,340,2)
    ball3= new Balls((displayWidth/2)-20,380,3)
    ball4= new Balls((displayWidth/2)-20,420,1)
    ball5= new Balls((displayWidth/2)-20,460,3)

    
    ball6= new Balls((displayWidth/2)+15,320,3)
    ball7= new Balls((displayWidth/2)+15,360,1)
    ball8= new Balls((displayWidth/2)+15,400,2)
    ball9= new Balls((displayWidth/2)+15,440,1)

    ball10= new Balls((displayWidth/2)+50,340,2)
    ball11= new Balls((displayWidth/2)+50,380,1)
    ball12= new Balls((displayWidth/2)+50,420,3)

    ball13= new Balls((displayWidth/2)+85,360,3)
    ball14= new Balls((displayWidth/2)+85,400,1)

    ball15= new Balls((displayWidth/2)+120,380,3)
    
    hit = new ConstraintStick(stick.body,{x:300, y:300})
    
console.log(displayWidth, displayHeight);
   



    

}

function draw(){

    


    if(gameState===0){
        background(menubackground);
        form.display()
    }
    if(gameState===1){
      
        form.hide();
        background( gamebackground);
        //image(gamebackground, 0,0,displayWidth-20, displayHeigh-20);
        Engine.update(Myengine);
        //ball.display();
        ball1.display();
        ball2.display();
        ball3.display();
        ball4.display();
        ball5.display();
        ball6.display();
        ball7.display();
        ball8.display();
        ball9.display();
        ball10.display();
        ball11.display();
        ball12.display();
        ball13.display();
        ball14.display();
        ball15.display();

        stick.display();
       

        
        

    }
    /* First create a blueprint with a constructor and display
    Refer the class in index 
    Create a global variable(object)
    Create the object using a new operator 
    Display the object on screen
    */
}

/*function mouseMoved(){
    stick.body.position.x= mouseX
    stick.body.position.y= mouseY


}*/
function mouseDragged(){
    Matter.Body.setPosition(stick.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    hit.fly();
}

