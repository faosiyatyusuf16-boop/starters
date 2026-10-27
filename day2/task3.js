 function passwordChecker(password) {

  let s = [];
  let missing = [];
  if (password.length < 8) {
    missing.push("password must be atleast 8 characters");
  }
  if (!/[0-9]/.test(password)) {
    missing.push("A number");
  }
  if (!/[A-Z]/.test(password)) {
    missing.push("An uppercase letter");
  }
  if (!/[a-z]/.test(password)) {
    missing.push("A small letter");
  }

  let strength = "";
  if(missing.length === 0){

  }
}
