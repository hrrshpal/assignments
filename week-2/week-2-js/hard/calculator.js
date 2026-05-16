/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor(result){
    this.result = 0;
  }

  add(num){
    this.result += num;
    return this.result
  }

  subtract(num){
    this.result -= num;
    return this.result
  }

  multiply(num){
    this.result *= num;
    return this.result
  }

  divide(num){
    if (num === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= num;
    return this.result
  }

  clear(){
    this.result = 0
    return this.result
  }

  getResult(){
    return this.result;
  }

  calculate(str){

    // filtering string so that it contains valid characters only
    let filteredString = ""
    let allowedSigns = "+-*/()."
    for(let i=0; i<str.length; i++){
      if((str[i] >= '0' && str[i] <= '9') || (allowedSigns.includes(str[i])) || str[i] === " "){
        filteredString += str[i]
      } else {
        throw Error("String contains Invalid Non Numerical Characters")
      }
    }

    this.result =  eval(filteredString)

    if (!isFinite(this.result)) {
      throw new Error("Cannot divide by zero");
    }

    return this.result

  }

}

module.exports = Calculator;
