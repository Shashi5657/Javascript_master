const section = document.querySelector('section')
const button = document.querySelector('button')

// section.style.backgroundColor = 'blue'
section.className = 'red-bg'
button.addEventListener('click', ()=> {
    section.classList.toggle('invisible')
})




// const h1 = document.getElementById("main-title");

// h1.textContent = "New Text";
// h1.style.color = "white";
// h1.style.backgroundColor = "black";

// const li = document.querySelector("li:last-of-type");
// li.textContent = li.textContent + "(Changed)";

// const listItemElements = document.getElementsByTagName("li");

// for (const listItemEl of listItemElements) {
//   console.dir(listItemEl);
// }
