const convert = require('convert-units');


const convertWeightBtn = document.querySelector('#convertWeight');

convertWeightBtn.addEventListener('click', () => {
    const input = document.getElementById('weight-input').value
    const initialUnits = document.querySelector('#weight-unit').value
    const targetUnits = document.getElementById('weight-target').value;

    if (!input || isNaN(input)) {
        alert("Please enter a valid number!");
        return;
    }

    try {
        const measurement = convert(input).from(initialUnits).to(targetUnits)

        // Select the container where results will be appended
        const container = document.querySelector('.container')
        const replaceTag = container.querySelector('#weight');
        const originalHTML = replaceTag.innerHTML

        if (measurement) {
            replaceTag.innerHTML =
            `<div>
                <h2>Results of your calculation:</h2>
                <h1>${input}${initialUnits} = ${measurement}${targetUnits}</h1>
            </div>
            <button class='w-25' id='reset-button' >Reset</button>
            `
            const resetButton = document.querySelector('#reset-button')
            resetButton.addEventListener('click', () => {
                replaceTag.innerHTML = originalHTML
            })

        } 
    } catch (error) {
        console.error(error)
    }
})