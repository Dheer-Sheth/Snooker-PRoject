class ConstraintStick{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.stickConstraint = Constraint.create(options);
        World.add(Myworld, this.stickConstraint);

       
        
        
    }

    fly(){
        this.stickConstraint.bodyA = null;
    }

    
    
}