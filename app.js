// alert("ki ajob");

/*select Item*/

var farenHeight = document.getElementById('convert');
var display = document.getElementById('pid');
var Switch = document.getElementById('switch');
var input = document.getElementById('digit');
var isOn = false;

// add EventListener convert Btn 
farenHeight.addEventListener('click', convertF);

// create function for Convert Btn


// add EventListener Switch Btn 
Switch.addEventListener("click", swtichTocCalcias);

//create function to handle switch btn...
function swtichTocCalcias() {
    if (isOn !== true) {
        Switch.innerHTML = "SWITCH TO F";
        farenHeight.innerHTML = "CONVERT TO C"
        isOn = true;
        convertC();
    } else {
        Switch.innerHTML = "SWITCH TO C";
        farenHeight.innerHTML = "CONVERT TO F";
        isOn = false;
        convertF()
    }
}

// create function to convert calcius...
function convertC() {
    var calcius = (Number(input.value) + 32) * (9 / 5);
    calcius.toFixed(2)
    display.innerHTML = "Calcius is : " + calcius + "C"
}

function convertF() {
    var faren = (Number(input.value) * 9 / 5) + 32;
    faren = faren.toFixed(2);
    display.innerHTML = "Faren Height is = " + faren + " f";
}