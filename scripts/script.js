{
    var redRange = document.querySelector('#redRange')
    var redText = document.querySelector('#redText')
    var redMixed = document.querySelector('#redMixed')
    var boxRed = document.querySelector('#boxRed')
    var boxMix = document.querySelector('#boxMix')

    redRange.addEventListener('mousemove', function mouseModify(){
        redText.value = this.value
        redMixed.value = this.value
        boxRed.style.backgroundColor = `rgb(${this.value}, ${0}, ${0})`;
        boxMix.style.backgroundColor = `rgb(${redRange.value}, ${greenRange.value}, ${blueRange.value})`;
    })

    redRange.addEventListener('keydown', function keyModify(){
        redText.value = this.value
        redMixed.value = this.value
        boxRed.style.backgroundColor = `rgb(${this.value}, ${0}, ${0})`;
        boxMix.style.backgroundColor = `rgb(${redRange.value}, ${greenRange.value}, ${blueRange.value})`;
    })
}

{
    var greenRange = document.querySelector('#greenRange')
    var greenText = document.querySelector('#greenText')
    var greenMixed = document.querySelector('#greenMixed')
    var boxGreen = document.querySelector('#boxGreen')
    var boxMix = document.querySelector('#boxMix')

    greenRange.addEventListener('mousemove', function mouseModify(){
        greenText.value = this.value
        greenMixed.value = this.value
        boxGreen.style.backgroundColor = `rgb(${0}, ${this.value}, ${0})`;
        boxMix.style.backgroundColor = `rgb(${redRange.value}, ${greenRange.value}, ${blueRange.value})`;
    })

    greenRange.addEventListener('keydown', function keyModify(){
        greenText.value = this.value
        greenMixed.value = this.value
        boxGreen.style.backgroundColor = `rgb(${0}, ${this.value}, ${0})`;
        boxMix.style.backgroundColor = `rgb(${redRange.value}, ${greenRange.value}, ${blueRange.value})`;
    })
}

{
    var blueRange = document.querySelector('#blueRange')
    var blueText = document.querySelector('#blueText')
    var blueMixed = document.querySelector('#blueMixed')
    var boxBlue = document.querySelector('#boxBlue')
    var boxMix = document.querySelector('#boxMix')

    blueRange.addEventListener('mousemove', function mouseModify(){
        blueText.value = this.value
        blueMixed.value = this.value
        boxBlue.style.backgroundColor = `rgb(${0}, ${0}, ${this.value})`;
        boxMix.style.backgroundColor = `rgb(${redRange.value}, ${greenRange.value}, ${blueRange.value})`;
    })

    blueRange.addEventListener('keydown', function keyModify(){
        blueText.value = this.value
        blueMixed.value = this.value
        boxBlue.style.backgroundColor = `rgb(${0}, ${0}, ${this.value})`;
        boxMix.style.backgroundColor = `rgb(${redRange.value}, ${greenRange.value}, ${blueRange.value})`;
    })
}
