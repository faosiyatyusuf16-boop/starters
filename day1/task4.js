const userName = "admin";
const password =  "12345";

function loginValidator(){
    if(userName ==="" || password === ""){
        return `username or password must be input`
    }else if(userName.length < 5){
        return `character must be atleast 4`
    }else if(password.length < 5){
        return `character must be atleast 4`
    }else if(userName === "admin" && password === "12345"){
        return `login successful`
    }else{
        return `invalid username or password`
    }
}

console.log(loginValidator())

// the differenece between == and ===, the == uses type convertion before comparing values while === does not perform type convertion before comparing values

// || this is an or operator while && is an and operator