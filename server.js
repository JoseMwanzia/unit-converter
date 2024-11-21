const convert = require('convert-units');
const length = document.getElementById('length-unit');
const targetLength = document.getElementById('length-target');
const value = document.getElementById('length-input')
const submit = document.getElementById('submit')

const values = convert(value).from(JSON.stringify(length)).to(JSON.stringify(targetLength))

submit.addEventListener('click', () => {
    console.log(values)
})
