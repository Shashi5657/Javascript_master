const person = {
    name : 'Shashi',
    age : 22,
    hobbies : ['Cooking', 'Coding'],
    greet : function(){
        alert('Hii there!')
    }
}

//to add a new property or to modify a prop in object

person.isAdmin = true;
person.age = 23

//to delete a prop in obj

delete person.age

console.log(person)

person.greet();