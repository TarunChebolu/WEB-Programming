var economySeats= [0,0,0,0,0];
var firstClassSeats= [0,0,0,0,0];

var economySeatsAmount = 0;
var firstClassSeatsAmount = 0;

function allocateSeat(){
    choice = document.getElementById("choiceInput").value;
    // alert(choice);
    if (choice == "first class" && firstClassSeatsAmount < 5){
        firstClassSeats[firstClassSeatsAmount] = 1;
        firstClassSeatsAmount++;
    }else if (choice == "first class"){
        if (economySeatsAmount < 5 && confirm("First class seats are full would you like a economy seat?")){
            economySeats[economySeatsAmount] = 1;
            economySeatsAmount++;
        }
        else{
            alert("We are sorry to be not able to accomadate you");
        }
    }
    if (choice == "economy" && economySeatsAmount < 5){
        economySeats[economySeatsAmount] = 1;
        economySeatsAmount++;
    }else if (choice == "economy"){
        if (firstClassSeatsAmount < 5 && confirm("Economy seats are full would you like a first class seat?")){
            firstClassSeats[firstClassSeatsAmount] = 1;
            firstClassSeatsAmount++;
        }
        else{
            alert("We are sorry to be not able to accomadate you");
        }
    }

    document.getElementById("economyOutput").value = economySeatsAmount;
    document.getElementById("firstClassOutput").value = firstClassSeatsAmount;
}