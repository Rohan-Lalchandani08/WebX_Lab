import * as readline from 'readline';

class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }

    divide(a: number, b: number): number | string {
        if (b === 0) {
            return "Error: Division by zero is not allowed";
        }
        return a / b;
    }

    calculate(operation: string, a: number, b: number): number | string {
        switch (operation) {
            case 'add':
                return this.add(a, b);
            case 'subtract':
                return this.subtract(a, b);
            case 'multiply':
                return this.multiply(a, b);
            case 'divide':
                return this.divide(a, b);
            default:
                return "Error: Invalid operation";
        }
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calculator = new Calculator();

rl.question('Enter operation (add, subtract, multiply, divide): ', (operation) => {
    rl.question('Enter first number: ', (num1) => {
        rl.question('Enter second number: ', (num2) => {
            const a = parseFloat(num1);
            const b = parseFloat(num2);
            
            if (isNaN(a) || isNaN(b)) {
                console.log("Error: Invalid number input");
            } else {
                console.log(`Result: ${calculator.calculate(operation, a, b)}`);
            }
            rl.close();
        });
    });
});
