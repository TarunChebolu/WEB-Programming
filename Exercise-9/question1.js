function findDays(){
    tempArray = document.getElementById("temparaturesInput").value.split(" ");
    var hotDays = 0, pleasantDays = 0, coldDays = 0;

    table = document.getElementById("outputTable");

    for(i=0; i<tempArray.length; i++){

        row = table.insertRow();
        cell1 = row.insertCell();
        cell1.innerHTML = tempArray[i];
        cell2 = row.insertCell();

        if(tempArray[i] >= 85){
            hotDays++;
            cell2.innerHTML = "Hot";
        }else if(tempArray[i] >=60){
            pleasantDays++;
            cell2.innerHTML = "Pleasant";
        }else{
            coldDays++;
            cell2.innerHTML = "Cold";
        }
    }

    document.getElementById("hotDaysOutput").value = hotDays;
    document.getElementById("pleasantDaysOutput").value = pleasantDays;
    document.getElementById("coldDaysOutput").value = coldDays;
}