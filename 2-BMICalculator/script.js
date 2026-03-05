const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const weight = parseInt(document.querySelector('#weight').value);
    const height = parseInt(document.querySelector('#height').value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please provide a valid height ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please provide a valid weight ${weight}`;
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let category = "";

        if (bmi < 18.6) {
            category = "Underweight";
            results.style.color = "blue";
        }
        else if (bmi <= 24.9) {
            category = "Normal weight";
            results.style.color = "green";
        }
        else {
            category = "Overweight";
            results.style.color = "red";
        }

        results.innerHTML = `
            <span>Your BMI: ${bmi}</span><br>
            <span>Category: ${category}</span>
        `;

    }
    
    
});
