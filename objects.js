//objects creation
//objects literal
//freeze
//function inside object

const user = {
    name : "Poonam",
    "age" : 20,
    location: "Nashik",
    email: "poonam@gmail.com",
    role: "Developer",
    holidays : ["saturday", "sunday"],
    company : {
        name: "software company",
        location: "Nashik"
    }
}

// console.log(user["name"])
// console.log(user["age"])
// console.log(user.holidays[0])
// console.log(user.company.location)
// console.log(user["company"]["location"])
// console.log(user.role)
user.role = "Leader"
// console.log(user.role)
// Object.freeze(user)
user.role = "Manager"
// console.log(user.role)

user.qualification = function () {
    console.log("My Qualification is post graduation in Computers")
}

console.log(user.qualification())




