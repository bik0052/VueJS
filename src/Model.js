class Model {
  constructor(){
    this.task = ''
    this.countOfNumbers = 0
    this.sum = 0
    this.average = 0
  }

  sumAndAvg1To100WithForLoop(){
    this.task = 'Using a “for” loop to calculate and output the sum and average of integers within the range 1 to 100 (inclusive).'
    for(let count = 1; count<=100;count++){
      this.sum+=count
    }
    this.average = (this.sum/100).toFixed(2)
    this.sum = this.sum.toFixed(2)
  }

  sumAndAvg1To100WithWhileLoop(){
    this.task = 'Using a “while” loop to calculate and output the sum and average of integers within the range 1 to 100 (inclusive).'
    let count = 1
    while (count <=100){
      this.sum+=count
      count++
    }
    this.average = (this.sum/100).toFixed(2)
    this.sum = this.sum.toFixed(2)
  }
  sumAndAvg1To100WithDoWhileLoop(){
    this.task = 'Using a “do/while” loop to calculate and output the sum and average of integers within the range 1 to 100 (inclusive).'
    let count = 1
    do{
      this.sum+=count
      count++
    }while(count <=100)
    this.average = (this.sum/100).toFixed(2)
    this.sum = this.sum.toFixed(2)
  }
  sumAndAvg1To100WithForInLoop(){
    this.task = 'Using a “for in” loop calculate to and output the sum and average of integers within the range 1 to 100 (inclusive).'
    let lower = 1,upper = 101
    let data = Array.from(new Array(upper-lower), (x,i) => i + lower)
    for(let aNum in data){
      this.sum += parseInt(aNum) + 1
    }
    this.average = (this.sum/100).toFixed(2)
    this.sum = this.sum.toFixed(2)
  }
  sumAndAvg1To100WithForOfLoop(){
    this.task = 'Using a “for of ” loop to calculate and output the sum and average of integers within the range 1 to 100 (inclusive).'
    let lower = 1,upper = 101
    let data = Array.from(new Array(upper-lower), (x,i) => i + lower)
    for(let aNum of data){
      this.sum += parseInt(aNum)
    }
    this.average = (this.sum/100).toFixed(2)
    this.sum = this.sum.toFixed(2)
  }
  sumAndAvg111To8989(){
    this.task = 'Calculate the sum and average integers within the range 111 to 8989 (inclusive). Also output the count the numbers in the specified range.'
    for(let count=111;count<=8989;count++){
      this.sum+= count
      this.countOfNumbers++
    }
    this.average = (this.sum/this.countOfNumbers).toFixed(2)
    this.sum = this.sum.toFixed(2)
  }
  sumAndAvgOdd1To100(){
    this.task = 'Calculate the sum and average of the odd integers with the range 1 to 100 (inclusive). Also output the count the numbers in the specified range.'
    for(let count=1;count<=100;count++){
      if(count%2!==0){
        this.sum+= count
        this.countOfNumbers++
      }
    }
    this.sum = this.sum.toFixed(2)
    this.average = (this.sum/this.countOfNumbers).toFixed(2)
  }
  sumAndAvgMultiplesOfSevenIn1To100(){
    this.task = 'Calculate the sum and average of the integers that are multiples of 7 within the range 1 to 100 (inclusive).'
    for(let count=1;count<=100;count++){
      if(count%7===0){
        this.sum+= count
        this.countOfNumbers++
      }
    }
    this.sum = this.sum.toFixed(2)
    this.average = (this.sum/this.countOfNumbers).toFixed(2)
  }
  sumOfSquares1To100(){
    this.task = 'Calculate the “sum of squares” of the integers within the range 1 to 100 (inclusive).'
    for(let count=1;count<=100;count++){
      this.sum += (count*count)
    }
    this.sum = this.sum.toFixed(2)
  }
  sumOfSquares111To8989(){
    this.task = 'Calculate the “sum of squares” of the integers within the range 111 to 8989 (inclusive).'
    for(let count=111;count<=8989;count++){
      this.sum += (count*count)
    }
    this.sum = this.sum.toFixed(2)
  }
}