// //01-ways for creating arrays
// const numbers = [1,2 , 3]
// console.log(numbers);

// const moreNumbers = new Array(4,5,6)
// console.log(moreNumbers)

// //it just creates an empty array with the length of 4
// const moreMoreNumbers = new Array(4)
// console.log(moreMoreNumbers)

// const listItems = document.querySelectorAll('li')
// console.log(listItems)

// //it converts array like objects or iterables to real arrays
// const yetMoreNumbers = Array.from(listItems)
// console.log(yetMoreNumbers)


// //02-ways of storing data in arrays

// const hobbies = ['cooking', 'eating']

// const personalData = ['shashi', 23, {'strength' : 'consistency'}]

// console.log(personalData)
// console.log(personalData[2])

// const analyticsData = [[1,5], [2,4]]

// for (const data of analyticsData ){
//     for(const dataPoint of data){
//         console.log(dataPoint)
//     }
// }


// //03-array methods -push/pop/shift/unshift

// const hobbies = ["coding", "cooking"];
// hobbies.push("sleeping"); //add the element to the end of an array
// hobbies.pop(); //removes ths last element of an array
// hobbies.unshift("Eating"); // add this element to the start of an array, shifts all items to right
// hobbies.shift(); //removes the first el of an array, shifts all the items to left
// console.log(hobbies);

// hobbies[1] = "Running"; //replace the index 1 item with this
// console.log(hobbies);


// //04- splice() method on arrays

// //splice(index, num of items to be deleted, element which we want to add)
// hobbies.splice(0, 0, "Walking");
// console.log(hobbies);

// //deleting element using splice()
// const removedElement = hobbies.splice(1, 1);
// console.log(hobbies);


//05- slice() method on arrays

//slice always returns a brand new array instead of reference
// const testedResults = [1, 1.99, 6, -3, 10.99, 7]
//if we use slice() it will return brand new array with all the elements
// const allResults = testedResults.slice()
// testedResults.push(3)
// console.log(allResults, testedResults)

//by this way, we r returning only a part, includes first index but not the last
// const partlyResults = testedResults.slice(1, 4)
// console.log(partlyResults)

//by using only a single index, it returns all elements after that index
// const nextResults = testedResults.slice(3)
// console.log(nextResults)


//06-concat method- adding arrays to the arrays & returns brand new array

// const testedResults = [1, 1.99, 6, -3, 10.99, 7]
// // const allResults = testedResults.concat([2,4])
// // console.log(allResults)

// //07 - indexOf an array
// console.log(testedResults.indexOf(6))
// //for reference values like objects, it returns -1 


//08-forEach method alternative to for-of
// const prices = [10, 25, 32, 16]
// const tax = 0.18
// const taxAdjustedPrice = []

// for(const price of prices) {
//     taxAdjustedPrice.push(price * (1+ tax))
// }

// prices.forEach((price, idx, prices) => {
//     taxAdjustedPrice.push(price * (1+ tax))
// })

// console.log(taxAdjustedPrice)


//map method
// const prices = [10, 25, 32, 16]
// const tax = 0.18

// const taxAdjustedPrice = prices.map((price, idx, prices) => {
//     const newObj = {index : idx , taxAdjPrice : price * (1+ tax)}
//     return newObj
// })

// console.log(newObj)


//sorting arrays

// const numbers = [7, 3, 5, 8]

// const sortedNumbers = numbers.sort((a,b) => {
//     if(a > b){
//         return 1;
//     } else if(a === b){
//         return 0;
//     }else {
//         return -1
//     }
// })

// console.log(sortedNumbers)

//filter method

// const numbers = [7, 3, 5, 8]

// const filteredNumbers = numbers.filter((price, index, prices) => {
//    return price >6
// })

// console.log(filteredNumbers)


//reduce method

// const numbers = [7, 3, 5, 8]

// const sum = numbers.reduce((prevValue, currValue)=> {
//     return prevValue + currValue
// }, 0)

// console.log(sum)


//spllit() & join()

// const data = '1-3-121, ailapurRoad, korutla'

// const transformedData = data.split(',')
// console.log(transformedData)

// const names = ['shashi', 's']
// const fullName = names.join(' ')
// console.log(fullName)


//spread operator ...

// const names = ['shashi', 's']

// const newName = [...names]
// names.push('Mr')
// console.log(names, newName)

// //but for objects it wont work , it still point to the  ref values
// //but to work we can use map

// const persons = [{name : 'shashi', age : 23}, {name : 'rajashekar', age: 24}]
// const newPersons = [...persons.map(person => ({
//     name : person.name,
//     age : person.age
// }))]


//array destructuring

const names = ['shashi', 's', 'Mr' , 23, 'Villain']

const [firstName, lastName, ...otherInfo] = names

console.log(firstName, lastName, otherInfo)