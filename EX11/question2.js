
running = true;
hours = 0;
minutes = 0;
seconds = 0;
timer;
timerScreen = document.getElementById("timer");

startButton = document.getElementById("start");
startButton.addEventListener("click", function(){
    // alert("ok");
    timer = setInterval(function(){
        seconds++;
        if (seconds == 60){
            seconds = 0;
            minutes++;
        }
        if (minutes == 60){
            minutes == 0;
            hourse ++;
        }
        timerScreen.textContent = `${hours}: ${minutes}: ${seconds}`;

    }, 1000);
});

document.getElementById("stop").addEventListener("click", function(){
    running = false;
    clearInterval(timer);
});

document.getElementById("reset").addEventListener("click", function(){
    running = false;
    clearInterval(timer);
    timerScreen.textContent = "0: 0: 0";
    seconds = 0;
    minutes = 0;
    hours = 0;
});

document.getElementById("DOB").addEventListener("mouseover", function(){
    input = document.getElementById("DOB");
    alert(new Date().getFullYear() - new Date(input.value).getFullYear());
});

document.getElementById("text").addEventListener("input", function(){
    
    document.getElementById("charCount").value = document.getElementById("text").value.length;
});
