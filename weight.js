const convert = require('convert-units');

function initializeWeightConverter() {
    const convertWeightBtn = document.querySelector('#convertWeight');
    const replaceTag = document.querySelector('#weight');
    const originalHTML = replaceTag.innerHTML

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
                    initializeWeightConverter()
                })

            }
        } catch (error) {
            console.error(error)
        }
    })
}
initializeWeightConverter()