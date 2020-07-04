function printKata (kataNumber, object){
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}


// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')



const greenEyes1 = users.filter(user => user.eyeColor === "green")
// OR...
const greenEyes2 = users.filter(function (user) {
    return user.eyeColor === "green"
})
printKata(0, greenEyes1)  

//kata 1
const isActiveTrue0 = users.filter(user => user.isActive === true)
printKata(1, isActiveTrue0) 

//kata 2
const emailsOnly = users.map(user => user.email)
printKata(2,emailsOnly)

//kata 3
const lookForOvation = users.filter(user => user.company === "OVATION")
printKata(3,lookForOvation)

//kata 4 use find method
const firstUserOver38 = users.find(user => user.age> 38)
printKata(4,firstUserOver38)

//kata 5 use filter find methods
const firstActiveUserOver38 = users.filter(user => user.isActive).find(user => user.age > 38)
printKata(5,firstActiveUserOver38)

//kata 6 use and .filter and map
const showBalance = users.filter(user => user.company === "ZENCO").map(user => user.balance)
printKata(6,showBalance)

//kata 7 use filter, include and map
const ageFugiatTag = users.filter(user => user.tags.includes("fugiat")).map(user => user.age)
    // .include(user => user.tags === "fugiat")
    // .map(user => user.age)
printKata(7,ageFugiatTag)