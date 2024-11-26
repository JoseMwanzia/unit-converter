require('./index.css');
const convert = require('convert-units');

const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

// Handle tab switching
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});

// Function to initialize the conversion logic
function initializeLengthConverter() {
    const convertLengthBtn = document.getElementById('convertLength');
    const replaceTag = document.querySelector('#length');
    const originalHTML = replaceTag.innerHTML;

    // Add event listener for conversion
    convertLengthBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const input = document.getElementById('length-input').value;
        const initialUnits = document.querySelector('#length-unit').value;
        const targetUnits = document.getElementById('length-target').value;

        if (!input || isNaN(input)) {
            alert("Please enter a valid number!");
            return;
        }

        try {
            const measurement = convert(input).from(initialUnits).to(targetUnits);

            if (measurement) {
                // Update the DOM with the results
                replaceTag.innerHTML = `
                    <div>
                        <h2>Results of your calculation:</h2>
                        <h1>${input}${initialUnits} = ${measurement}${targetUnits}</h1>
                    </div>
                    <button class='w-25' id='reset-button'>Reset</button>
                `;

                // Add event listener for reset
                const resetButton = document.querySelector('#reset-button');
                resetButton.addEventListener('click', () => {
                    // Restore original content
                    replaceTag.innerHTML = originalHTML;

                    // Reinitialize event listeners
                    initializeLengthConverter();
                });
            }
        } catch (error) {
            console.error("Error in conversion:", error);
        }
    });
}

// Initialize on page load
initializeLengthConverter();
