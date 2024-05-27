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

//03-array methods -push/pop/shift/unshift

const hobbies = ['coding', 'cooking']
hobbies.push('sleeping') //add the element to the end of an array
hobbies.pop()//removes ths last element of an array
hobbies.unshift('Eating') // add this element to the start of an array, shifts all items to right
hobbies.shift()//removes the first el of an array, shifts all the items to left
console.log(hobbies)

hobbies[1] = 'Running' //replace the index 1 item with this
console.log(hobbies)