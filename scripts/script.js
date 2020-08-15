let redRange = document.querySelector('#redRange');
let redText = document.querySelector('#redText');
let redMixed = document.querySelector('#redMixed');
let boxRed = document.querySelector('#boxRed');
let blueRange = document.querySelector('#blueRange');
let blueText = document.querySelector('#blueText');
let blueMixed = document.querySelector('#blueMixed');
let boxBlue = document.querySelector('#boxBlue');
let greenRange = document.querySelector('#greenRange');
let greenText = document.querySelector('#greenText');
let greenMixed = document.querySelector('#greenMixed');
let boxGreen = document.querySelector('#boxGreen');
let boxMix = document.querySelector('#boxMix');

redRange.addEventListener('input', function mouseModify() {
	redText.value = this.value;
	redMixed.value = this.value;
	boxRed.style.backgroundColor = `rgb(${this.value}, ${0}, ${0})`;
	boxMix.style.backgroundColor = `rgb(${redRange.value}, ${greenRange.value}, ${blueRange.value})`;
});

greenRange.addEventListener('input', function mouseModify() {
	greenText.value = this.value;
	greenMixed.value = this.value;
	boxGreen.style.backgroundColor = `rgb(${0}, ${this.value}, ${0})`;
	boxMix.style.backgroundColor = `rgb(${redRange.value}, ${greenRange.value}, ${blueRange.value})`;
});

blueRange.addEventListener('input', function mouseModify() {
	blueText.value = this.value;
	blueMixed.value = this.value;
	boxBlue.style.backgroundColor = `rgb(${0}, ${0}, ${this.value})`;
	boxMix.style.backgroundColor = `rgb(${redRange.value}, ${greenRange.value}, ${blueRange.value})`;
});
