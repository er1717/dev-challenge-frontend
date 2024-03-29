const productForm = document.getElementById('product-form');

productForm.addEventListener('submit', e => {
  e.preventDefault();
  const length = document.getElementById('input_length').value;
  const width = document.getElementById('input_width').value;
  const height = document.getElementById('input_height').value;
  const weight = document.getElementById('input_weight').value;

  //Change this to the localhost when working locally to see those changes if any
  fetch(`https://dev-challenge-backend.herokuapp.com/products?length=${length}&width=${width}&height=${height}&weight=${weight}`)
  .then(res => res.json())
  .then(res => {
    const productOutput = document.getElementById('product-output');
    const productName = document.getElementById('product-name');
    if (res.error) {
      productOutput.innerHTML = res.error;
    } else {
      productOutput.innerHTML = `Use this ${res.name}`;
      setTimeout(() => {
        $('#calculatorModal').modal('hide');
        productName.innerHTML = `Product Name: ${res.name}`;
      }, 5000);
    }
  })
  .catch(err => console.log('error occured', err));
});