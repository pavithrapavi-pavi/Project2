function SubmitForm() {
    let fname = document.getElementsByName("fname")[0].value;
    let animal = document.getElementsByName("Animal")[0].value;
    let number = document.getElementsByName("Number")[0].value;
    let adjective = document.getElementsByName("Adjective")[0].value;
    let theme = document.getElementById("theme").value;
    if (fname === "" || animal === "" || number === "" || adjective === "") {
        alert("Please fill all the fields!");
        return;
    }
    var story = document.getElementById("story");

    const storyText =
        `Once upon a time, ${fname} discovered a mysterious ${theme} adventure. ` +
        `While exploring, ${fname} encountered ${number} ${animal}${number > 1 ? "s" : ""}. ` +
        `Although feeling very ${adjective}, ${fname} decided to keep going. ` +
        `In the end, the adventure became an unforgettable story with a happy ending.`;

    story.innerHTML = storyText;

}
