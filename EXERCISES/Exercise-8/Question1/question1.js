//This code is written by Tarun Chebolu 23BCE1016
function alertOnLoad()
{
    A = parseInt(prompt("Value A: ", "0"));
    B = parseInt(prompt("Value B: ", "0"));
    operationSelect = prompt("Operation (+, -, *, /) : ");
    if(operationSelect == "+"){
        alert(A+B);
    }else if(operationSelect == "-"){
        alert(A-B);
    }else if(operationSelect == "*"){
        alert(A*B);
    }else if(operationSelect == "/"){
        alert(A/B);
    }else{
        alert("Invalid Operation\n Try Again");
        alertOnLoad();
    }
}