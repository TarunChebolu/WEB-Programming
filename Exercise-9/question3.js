function calculate(){
    gender = document.getElementById("genderInput").value;
    height = parseFloat(document.getElementById("heightFeetInput").value)*12 + parseFloat(document.getElementById("heightInchesInput").value);
    weight = parseInt(document.getElementById("weightInput").value);
    bmi = 703*weight/(height*height);
    message = "";

    if (gender == "Male"){
        if (bmi <=17.50){
            message = "Anorexia";
        }else if(bmi <= 19.10){
            message = "Under weight";
        }else if(bmi < 25.80){
            message = "Ideal Range";
        }else if(bmi < 27.30){
            message = "Marginally Overweight"
        }else if(bmi < 32.30){
            message = "Overweight";
        }else{
            message = "Obese";
        }
    }else{
        if (bmi <=17.50){
            message = "Anorexia";
        }else if(bmi <= 20.70){
            message = "Under weight";
        }else if(bmi < 26.40){
            message = "Ideal Range";
        }else if(bmi < 27.80){
            message = "Marginally Overweight"
        }else if(bmi < 31.10){
            message = "Overweight";
        }else{
            message = "Obese";
        }
    }
    alert(message);
    document.getElementById("output").value = bmi;
}