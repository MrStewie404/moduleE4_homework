class PowerCalculator {
    constructor(base, exponent) {
        this.base = base;
        this.exponent = exponent;
    }

    calculatePower() {
        let result = 1;
        for (let i = 0; i < this.exponent; i++) {
            result *= this.base;
        }
        return result;
    }
}

let calculator = new PowerCalculator(2, 3);
let result = calculator.calculatePower();
console.log(result);