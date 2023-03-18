document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    // get form values
    const gender = document.querySelector('#gender').value;
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    // make API call to machine learning model
    fetch(`/calculate-bmi?gender=${gender}&height=${height}&weight=${weight}`)
        .then(response => response.json())
        .then(data => {
            // display result to user
            alert(`Your BMI is ${data.bmi.toFixed(2)} (${data.status})`);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error calculating your BMI. Please try again later.');
        });
});