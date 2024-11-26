const convert = require('convert-units');

function initializeTempConverter() {
    const convertTemperatureBtn = document.querySelector('#convertTemp');
    const replaceTag = document.querySelector('#temperature');
    const originalHTML = replaceTag.innerHTML

    convertTemperatureBtn.addEventListener('click', () => {
        const input = document.getElementById('temperature-input').value
        const initialUnits = document.querySelector('#temperature-unit').value
        const targetUnits = document.getElementById('temperature-target').value;

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
                    initializeTempConverter()
                })

            }
        } catch (error) {
            console.error(error)
        }
    })
}
initializeTempConverter()