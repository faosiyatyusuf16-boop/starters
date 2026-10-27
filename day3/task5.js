const prices = [1000, 2500, 5000, 7500, 10000]
const finalResult = [...prices]
.sort((a, b) => a - b)
.filter(price => price >= 5000)
.map(price => price * 0.9)

console.log(finalResult)