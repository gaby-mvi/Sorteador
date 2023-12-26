const drawButton = document.querySelector(".draw-button")
const clearButton = document.querySelector(".clean-button")

function drawNumber() {
    const minimumNumber = Math.ceil(document.getElementById("input-min").value)
    const maximumNumber = Math.floor(document.getElementById("input-max").value)

    const result = Math.floor(Math.random() * (maximumNumber - minimumNumber + 1)) + minimumNumber;

    if (maximumNumber > minimumNumber) {
        document.querySelector(".drawn-number").value = result
    } else {
        alert("Digite um valor valido!")
    }
}

function clearValues() {
    document.getElementById("input-min").value = ""
    document.getElementById("input-max").value = ""
    document.querySelector(".drawn-number").value = ""
    console.log("Apagar")
}

drawButton.addEventListener("click", drawNumber)
clearButton.addEventListener("click", clearValues)