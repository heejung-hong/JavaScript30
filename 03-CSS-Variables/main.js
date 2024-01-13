
/*
if you enter document.querySelectorAll('.controls input') in the inspect console
you will get the NodeList with the methods available.
the forEach can be used to loop over input
*/

const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  console.log(this.dataset) // dataset is an object that contains all the data- attributes in html
  console.log(suffix) // px
  console.log(this.name) // spacing or blur or base
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix) // name and value are attributes in the html
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))