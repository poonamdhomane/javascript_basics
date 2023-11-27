//concat
//spread operator 
//rest operator 
//flat
//isArray
//from
//of

let computerSubjects = ["Computer" , "Software Architecture" , "DBMS"]
let electoricsSubjects = ["Electricals", "Electorics"]
let commerceSubjects = ["Accounts", "Costing", "GST"]

let allSubjects = computerSubjects.concat(commerceSubjects)

// console.log(computerSubjects)
// console.log(allSubjects)

//spread operator  ...  
let allSubjectsNew = [...computerSubjects , ...commerceSubjects];
// console.log(computerSubjects)
// console.log(allSubjects)

// function check(num1 , num2 , ...num) { // rest operator 

//     return num1 + num2
// }

let nested_array = [1,2,3 , [4,5,6] , [ 6,7, [8,9,10,11,12]] , 20 ,30]

let result = nested_array.flat(Infinity)
// console.log(nested_array)
// console.log(result)

let sample = "sample string"


let  resultIsArray = Array.isArray(sample)
// console.log(resultIsArray)

let resultFrom =  Array.from(sample)
// console.log(resultFrom)

let user = {
    username : "Poonam",
    role: "Developer"
}

let result1 = Array.from(user)
console.log(result1)


let num1 = 1000
let num2 = 2000
let num3 = 3000

let resultOf  = Array.of(num1,num2,num2)
console.log(resultOf)

