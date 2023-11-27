//spread operator 
//assign
//way of accessing object
//keys
//values
//hasOwnProperty

let anotherUser = {}

anotherUser.name = "Poonam"
anotherUser.role = "Developer"
anotherUser.company = {
    name : "Software company",
    location: "Nashik"
}

const obj1 = { a: "AAA" , b: "BBB"}
const obj2 = { c: "CCC" , d: "DDD"}
const obj3 = { e: "FFF" , f: "EEE"}

let sampleArray = [obj1  , obj2 , obj3]
console.log(sampleArray)


//   let result = Object.assign( {}, obj1 , obj2 , obj3)
let result = {...obj1, ...obj2, ...obj3}

// console.log(obj1)
// console.log(obj2)
// console.log(obj3)
// console.log("-----------------")
// console.log(result)


const tutorial = {
    topic : "javascript",
    medium : "blog",
    editor: "vs code"
}

const { topic , medium } = tutorial
// console.log(topic)
// console.log(medium)

console.log(Object.keys(tutorial))
console.log(Object.values(tutorial))
console.log(Object.entries(tutorial))

let result1  = tutorial.hasOwnProperty("topic")
console.log(result1);

//tutorial?.topic 

