

class Calculator{

    constructor(a,b){
        this.a = a ;
        this.b = b;
    }
    
    calculator(operation){
        
        switch(operation){

            case "add":
                return this.a + this.b;
            
            
            case "subtract":
                return this.a - this.b;
            
            case "multiply":
                return this.a * this.b;

            case "divide":
                return this.b !== 0 ? this.a / this.b:"Division by zero error";
            
            default :
            return "invalid Operation";
        }
    }
}

const cal = new Calculator(22.2,10.6);
console.log(cal.calculator("add"));
console.log(cal.calculator("subtract"));
console.log(cal.calculator("multiply"));
console.log(cal.calculator("divide"));
