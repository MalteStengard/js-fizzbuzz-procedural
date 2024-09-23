const answer = []

// Write your code below this line

const list = Array.from({ length: 15 }, (_, i) => i + 1)
console.log(list)

list.forEach((x, index) => {
  if (x % 3 === 0) {
    list[index] = 'Fizz'
  }
  if (x % 5 === 0) {
    list[index] = 'Buzz'
  }
  if (x % 5 === 0 && x % 3 === 0) {
    list[index] = 'FizzBuzz'
  }
})
console.log(list)

answer.push(...list)

// Don't touch the code below this line, we'll cover it later
module.exports = answer
