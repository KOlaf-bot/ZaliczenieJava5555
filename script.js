function obliczBMI() {
    var waga = parseFloat(document.getElementById('waga').value);
    var wzrost = parseFloat(document.getElementById('wzrost').value);

    if (waga > 0 && wzrost > 0) {
        var bmi = waga / (wzrost * wzrost);
        var bmiwynik = "Twoje BMI to " + bmi.toFixed(2);

        if (bmi < 18.5) {
            bmiwynik += " - Niedowaga";
        } else if (bmi >= 18.5 && bmi < 25) {
            bmiwynik += " - Normalna waga";
        } else if (bmi >= 25 && bmi < 30) {
            bmiwynik += " - Nadwaga";
        } else {
            bmiwynik += " - Otyłość";
        }

        document.getElementById('wynik').innerText = bmiwynik;
    } else {
        alert("Wprowadź prawidłowe wartości");
    }
}
