function doChanges(){
    document.getElementById("title").textContent = "Updated Title";

    document.getElementsByName("username")[0].value = "John Doe";

    genderRadios = document.getElementsByName("gender");
    for (let radio of genderRadios) {
        if (radio.checked) {
            console.log("Selected gender:", radio.value);
        }
    }

    paragraphs = document.getElementsByTagName("p");
    console.log("Total number of <p> elements:", paragraphs.length);

    listItems = document.getElementsByTagName("li");
    for (let item of listItems) {
        console.log("List item:", item.textContent);
    }

    inputFields = document.getElementsByClassName("input-field");
    for (let field of inputFields) {
        field.style.backgroundColor = "lightblue";
    }

    document.querySelector(".info").textContent = "This is the first info paragraph";
    document.querySelector("input[name='gender']").checked = true;

    infoParagraphs = document.querySelectorAll(".info");
    for (let paragraph of infoParagraphs){
        console.log("Info Paragrapsh: ", paragraph.textContent);
    }

    checkboxes = document.querySelectorAll(".hobby");
    checkboxes.forEach(checkbox => {
        checkbox.checked = true;
        console.log("Checked hobby:", checkbox.value);
    });


}
