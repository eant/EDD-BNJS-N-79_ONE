const form = document.getElementById('Form')
console.log('FRONT')

form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const inputs = evt.target.querySelectorAll('input')

    const data = {};

    for (const input of inputs) {
        data[input.name] = input.value;
    }

    const config = {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
    }

    fetch('/usuarios', config)
        .then(data => data.json())
        .then(data => console.log(data))
})