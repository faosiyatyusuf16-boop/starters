let english = 78;
let mathematics = 85;
let javascript = 92;
let design = 70;

let totalScore = (english + mathematics + javascript + design);
console.log(`Total score = ${totalScore}`)

let avarageScore = (totalScore / 4);
console.log(`Avarage score = ${avarageScore}`)

function covertAverageGrade(score){
    if (score <= 100 && score >=90){
        return "A"
    }else if(score <= 89 && score >= 80){
        return "B"
    }else if(score <= 79 && score >=70){
        return "C"
    }else if(score <= 69 && score >= 60){
        return "D"
    }else{
        return "F"
    }
};

console.log(`Grade: ${covertAverageGrade(avarageScore)}`)
console.log(`59: ${covertAverageGrade(60)}`)
console.log(`69: ${covertAverageGrade(69)}`)
console.log(`78: ${covertAverageGrade(78)}`)
console.log(`99: ${covertAverageGrade(99)}`)
console.log(`70: ${covertAverageGrade(70)}`)
console.log(`86: ${covertAverageGrade(86)}`)