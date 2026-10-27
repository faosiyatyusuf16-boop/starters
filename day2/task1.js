function convertCelcius(c){
    if(isNaN(c)) return`Invalid input`

    return(c * 9/5) +32
}

console.log(convertCelcius(60))

function convertFahrenheit(f){
    if(isNaN(f)) return`Invalid input`

    return(f - 32) *5/9
}

console.log(convertCelcius(20))
