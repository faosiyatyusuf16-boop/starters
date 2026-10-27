const languages = ['Javascript', 'python', 'java', 'c#', 'Go', 'PHP', 'Ruby', 'Typescript']
console.log(languages[0])
console.log(languages[7])
console.log(languages[3])
console.log(languages.length)

languages[3]= "pyth"
console.log(languages)

languages.push("css")
console.log(languages)

languages.pop(3)
console.log(languages)

// it start at 0 because it's an offset from the first memory location
// it will print undefined