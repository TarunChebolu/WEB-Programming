function addRows(){
    var table = document.getElementById('table');
    row = table.insertRow();
    for(let i=0; i<table.rows[0].cells.length; i++){
        row.insertCell();
    }
    
}

function addCols(){
    var table = document.getElementById('table');
    for (let i=0; i<table.rows.length; i++){
        table.rows[i].insertCell();
    }
    
}

function addButtonAndTextBox(){
    var buttonAdd = document.createElement("button");
    buttonAdd.innerHTML = "New Button";
    buttonAdd.setAttribute("id", "newButton");
    buttonAdd.style.backgroundColor = "red";
    buttonAdd.addEventListener("mouseover", function(){document.getElementById("newButton").style.backgroundColor = "green";});
    buttonAdd.addEventListener("mouseleave", function(){document.getElementById("newButton").style.backgroundColor = "red";});

    
    var textBox = document.createElement("input");
    textBox.setAttribute("type", "text");
    textBox.setAttribute("id", "newTextBox");
    textBox.style.backgroundColor = "green";
    textBox.addEventListener("focus", function(){document.getElementById("newTextBox").style.backgroundColor = "yellow";});
    textBox.addEventListener("blur", function(){document.getElementById("newTextBox").style.backgroundColor = "green";});



    document.body.appendChild(buttonAdd);
    document.body.appendChild(textBox);
}

function addToList(){
    list = document.getElementById("unOrderedList");
    text = document.getElementById("listInput").value;

    list.innerHTML += `<li>${text}</li>`;
}

function addKeyCount(){
    // alert(parseInt(document.getElementById("keyCount").value));
    if (document.getElementById("keyCount").value != ""){
        document.getElementById("keyCount").value = parseInt(document.getElementById("keyCount").value) + 1;
    }else{

        document.getElementById("keyCount").value = 1;
    }
}