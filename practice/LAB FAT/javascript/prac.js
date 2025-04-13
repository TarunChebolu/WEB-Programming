function addRow(){
    table = document.getElementById("table");
    row = table.insertRow();
    N = table.rows[0].cells.length

    for (let i=0; i<N; i++){
        row.insertCell();
    }
}

function addCol(){
    table=document.getElementById("table");
    N = table.rows.length;
    for (let i=0; i<N; i++){
        table.rows[i].insertCell()
    }
}

function checkReg(){
    pattern = /^[0-9]{3}$/;
    if (pattern.test(document.getElementById("inputText").value)){
        alert("GOOD");
    }else{
        alert("BAD");
    }
}