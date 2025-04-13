//This code is written by Tarun Chebolu 23BCe1016
function findTotal(){
    var children = parseInt(document.getElementById("childrenCountInput").value);
    var adults = parseInt(document.getElementById("adultsCountInput").value);
    document.getElementById("total").value = adults*10 + children*5;
}