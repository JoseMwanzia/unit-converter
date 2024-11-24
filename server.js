require('./index.css')
const convert = require('convert-units')
const convertLengthBtn = document.getElementById('convertLength');
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});

convertLengthBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const input = document.getElementById('length-input').value
    const initialUnits = document.querySelector('#length-unit').value
    const targetUnits = document.getElementById('length-target').value;

    if (!input || isNaN(input)) {
        alert("Please enter a valid number!");
        return;
    }

    try {
        const measurement = convert(input).from(initialUnits).to(targetUnits)

        // Select the container where results will be appended
        const container = document.querySelector('.container')
        const replaceTag = container.querySelector('#length');
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
