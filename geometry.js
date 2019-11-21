(function () {
    class Triangle{

        constructor(side1= 3, side2= 3, side3= 3) {
            this.side1 = side1;
            this.side2 = side2;
            this.side3 = side3;
        }

        getArea(){
            return `Area of the Triangle with sides: 
            ${this.side1}, ${this.side2}, ${this.side3} 
            is ${this.calculateArea()}`;
        }

        calculateArea(){
            let p = (this.side1 + this.side2+ this.side3) / 2;
            return (Math.sqrt(p * ( (p - this.side1 ) * (p - this.side2) * (p - this.side3) ))).toFixed(3);
        }
    }


    let triangle = new Triangle(5, 6,7);
    console.log(triangle.getArea());
})();