tableData = [
    { PId: 1, Name: "Alen", Age: 39 , hidden: 0},
    { PId: 2, Name: "Deena", Age: 47, hidden: 0 },
    { PId: 3, Name: "Diana", Age: 21, hidden: 0 },
    { PId: 4, Name: "Jack", Age: 54, hidden: 0 },
    { PId: 5, Name: "Jain", Age: 23, hidden: 0 },
    { PId: 6, Name: "Kelvin", Age: 61, hidden: 0 },
    { PId: 7, Name: "Louis", Age: 69, hidden: 0 },
    { PId: 8, Name: "Rex", Age: 49, hidden: 0 }
];

function displayTable(){
    let tableprev = document.getElementById("table");
    if (tableprev != null){
        tableprev.remove();
    }
    table = document.createElement("table");
    table.setAttribute("border", 2);
    table.setAttribute("id", "table");
    
    for (var i=0; i<tableData.length; i++){
        if (tableData[i].hidden == 0){
            let row = table.insertRow();
            
            cell1 = row.insertCell();
            cell1.innerHTML = tableData[i].PId;
            cell1 = row.insertCell();
            cell1.innerHTML = tableData[i].Name;
            cell1 = row.insertCell();
            cell1.innerHTML = tableData[i].Age;
        }
    }

    document.body.appendChild(table);
}

function sortTable(){
    var N = tableData.length;
    for (var i=0; i<N; i++){
        for (var j=i+1; j<N; j++){
            if (tableData[i].Age < tableData[j].Age){
                temp = tableData[i];
                tableData[i] = tableData[j];
                tableData[j] = temp;
            }
            // console.log(tableData);
        }
    }
    displayTable();
}

function searchPID(){
    for (var i=0; i<tableData.length; i++){
        if (tableData[i].PId == document.getElementById("searchValue").value && tableData[i].hidden == 0){
            alert("There exists a value with that PID!!");
            return;
        }
    }

    alert("There is no such Value with such PID!!");
    return;
}

function filterData(){
    min = document.getElementById("min").value;
    max = document.getElementById("max").value;

    for (var i=0; i<tableData.length; i++){
        if (tableData[i].Age < min || tableData[i].Age > max){
            tableData[i].hidden = 1;
        }
    }
    displayTable();
}