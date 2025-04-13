x = 0;
y = 50;
dx = 3;
dy = 1;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function drawBalls(){
    console.log("k");
    ctx.clearRect(0, 0, 1000, 1000);
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(x, y, 20, 0, 2*Math.PI);
    ctx.fill();
    
    x+= dx;
    y += dy;

    if (x > 1000 || x<0){
        dx*=-1;
    }
    if (y > 1000 || y<0){
        dy*=-1;
    }

    setTimeout(drawBalls, 10);
}

drawBalls();

function addRow(){
    table = document.getElementById("table");
    numRows = table.rows.length;

    if (numRows == 0){
        newRow = table.insertRow();
    }else{
        numCols = table.rows[0].cells.length;
        newRow = table.insertRow();
        for (let i=0; i<numCols; i++){
            newCell = newRow.insertCell();
            newCell.innerText = i;
            newCell.addEventListener("mouseover", function(){
                this.style.backgroundColor = "red";
            });
        }
    }
}

function addCol(){
    table = document.getElementById("table");
    numRows = table.rows.length;

    for (let i=0; i<numRows; i++){
        newCell = table.rows[i].insertCell();
        newCell.innerText = table.rows[i].cells.length;
        newCell.addEventListener("mouseover", function(){
            this.style.backgroundColor = "red";
        });
    }
}

function timeout(){
    alert("TIME");
    setTimeout(timeout, 5000);
}

function validate(){
    if (document.getElementById("name").value == ""){
        alert("FILL THE NAME PLEASE");
    }else if(document.getElementById("age").value == ""){
        alert("FILL THE AGE PLS");
    }else if(document.getElementById("nationality").value == "choose"){
        alert("PLEASE CHOOSE NATIONALOTY");
    }else if(document.getElementById("age").value.search(/^[0-9]*$/) == -1){
        alert("AGE IS A NUMBER YOU RETARD");
    }else if(document.getElementById("name").value.search(/^2[1234][A-Z]{3}[0-9]{4}/) == -1){
        alert("INVALIDNAME");
    }

    
}

function date(){
    alert(new Date().getMinutes());
}

// const xArray = ["BJP", "CONG"];
// const yArray = [40, 60];

// const data = [{
//     labels: xArray,
//     values: yArray,
//     type: "pie",
//     hole: 0.5
// }]

// const layout = {
//     title: "VOTES"
// }

// Plotly.newPlot("screen", data, layout);

function up(e){
    e.style.zIndex = "10";
}

function down(e){
    e.style.zIndex = "";
}