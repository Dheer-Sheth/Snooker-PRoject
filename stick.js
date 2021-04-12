class Stick{
    constructor(x,y){
            this.stick= loadImage("sprites/spr_stick.png");
            var options={
                'restituion': 0.02,
                'friction': 0.5,
                'density': 0.3
         }
    
            this.body= Bodies.rectangle(x,y,30,100,options)
        }
    
        display(){
            var position= this.body.position 
            
            image(this.stick, position.x, position.y, 500,30);
            
    
        }
    
    
    
    
}