function canVote( birthYear, currentYear,){

    if(currentYear - birthYear >= 18){
        return true
    }else{
        return false
    }

}

console.log(canVote( 2005, 2026))