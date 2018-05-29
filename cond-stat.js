var currentTemp;
var tempCold = currentTemp < 5;
var tempMedium = currentTemp > 4 && currentTemp < 18

function showTemperature() {
    var currentTemp = document.getElementById("myNumber").value;
    document.getElementById("temperature").innerHTML = currentTemp;
}

function showClothes() {
if (tempCold) {
    document.write("Parka weather");
} else if (tempMedium) {
    document.write("Jacket weather");
} else {
    document.write("T-shirt weather");
}
}

showClothes()
