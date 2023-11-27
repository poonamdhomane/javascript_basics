//push 
//pop
//shift 
//unshift
//slice
//splice
//indexOf
//includes

let sample1Arr = [0,1,2,3,4,5]
let sample2Arr = [6,7,8]

let result = sample1Arr.push(10)
// console.log(sample1Arr)
// console.log("result =",result)
// console.log(sample1Arr[6])

let popResult = sample1Arr.pop()
// console.log(sample1Arr)
// console.log("pop Result =",popResult )


let array1 = ["one","two", "three"]
let array2 = ["three","four", "five"]

let result1 = array1.unshift("zero") //push
// console.log(result1);
// console.log(array1);

let result2 = array1.shift()
// console.log(result2);



let array_1 = ["one","two", "three","four", "five"]


let result_1 = array_1.slice(2,4); //not affecting main array
// console.log("array => ",array_1)
// console.log("slice => ",result_1)

// console.log("__________________________")

let result_2 = array_1.splice(2,4); //not affecting main array
// console.log("array => ", array_1)
// console.log("splice => ",result_2)


let courseArray = ["javascript", "swift", "c language", "react", "angular"]
let resultIndexOf = courseArray.indexOf("react")
// console.log(resultIndexOf)


let resultInclude  = courseArray.includes("react")
// console.log(resultInclude)

let joinResult = courseArray.join()
console.log(courseArray);
console.log(joinResult);








