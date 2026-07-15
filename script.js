function submitForm() {
    let fname = document.getElementsByName("fname")[0].value;
    let animal = document.getElementsByName("Animal")[0].value;
    let number = document.getElementsByName("Number")[0].value;
    let adjective = document.getElementsByName("Adjective")[0].value;
    let theme = document.getElementById("theme").value;
    if (fname === "" || animal === "" || number === "" || adjective === "") {
        alert("Please fill all the fields!");
        return;
    }
    alert(
        "Form Submitted Successfully!\n\n" +
        "Name: " + fname +
        "\nAnimal: " + animal +
        "\nNumber: " + number +
        "\nAdjective: " + adjective +
        "\nTheme: " + theme
    );
}
