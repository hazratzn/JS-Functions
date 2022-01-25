let numArr = [1, 2, 3, 4, 5, 7, 8, 9, 10];

const squareEvenNumbers = (numArr) => {
  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 === 0) {
    sum += Math.pow(numArr[i], 2);
    }
  }
  return sum
}
 
console.log(squareEvenNumbers(numArr));

//arrayin icindeki cut ededlerin kvadrat cemleri