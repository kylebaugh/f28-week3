console.log("hello world");

// Step 1: Select Element
let image = document.querySelector('img')
let form = document.querySelector('#contact');

// Step 2: Write function

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}

const hoverCompliment = () => {
	alert('Look at you, making interactive web pages!')
}


// Step 3: Combine them with event listener

form.addEventListener('submit', handleSubmit);
image.addEventListener('mouseover', hoverCompliment)