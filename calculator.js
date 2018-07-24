'use strict'

class Calculator {
  //write your code here
  constructor() {
    this.number = 1
  }

  add(number) {

    this.number += number

    return this

  }

  substract(number) {

    this.number -= number

    return this

  }

  multiply(number) {

    this.number *= number

    return this

  }

  divide(number) {

    this.number /= number

    return this

  }

  square() {

    this.number = Math.pow(this.number, 2)

    return this

  }

  squareRoot(number) {

    this.number = Math.sqrt(this.number, number)

    return this

  }

  circle(number) {

    const phi = 3.14

    this.number = Math.ceil(phi * (number * number))

    return this

  }

  equals() {
    return this.number
  }

}

let count = new Calculator()
// console.log(count.add(2).add(2).equals())
// console.log(count.add(4).add(5).equals());
/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
