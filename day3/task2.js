const scores = [78, 92, 65, 88, 54, 71, 96, 83];

const total = scores.reduce((sum, score) => sum + score, 0)
console.log("Total:", total)

const avarage = scores.reduce((sum, score) =>{
    return (sum + score)/ (scores.length)
})

console.log("Avarage", avarage)

const highestNo = Math.max(...scores)
console.log("Highest Number:", highestNo)

const lowestNo = Math.min(...scores)
console.log("Lowest Number:", lowestNo)

const passed = scores.filter(score => score >= 60).length;
console.log("Passed:", passed);

const failed = scores.filter(score => score <= 60).length;
console.log("Failed:", failed);

function analyzeScore(scores){
    const total = scores.reduce((a, b) => a + b , 0)

    return{
        Total: total,
        Avarage : total / scores.length,
        HighestNumber : Math.max(...scores),
        lowestNumber : Math.min(...scores),
        Passed : scores.filter(s => s >= 60).length,
        failed: scores.filter(s => s < 60).length
    }
}

console.log(analyzeScore(scores));
console.log(analyzeScore([40, 100, 55]));