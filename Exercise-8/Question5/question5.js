function alertOnLoad()
{
    var registrationNumber = prompt("Registration Number: ");
    var name = prompt("Name: ");

    document.write('<div style="border: 5px solid red; background-color: grey; width: 200px; margin-left: 50%;"><h1 align="center">' + registrationNumber + '</h1></div><h1 id="h1Modify" style="color: red; margin-left:50%;"></h1>');
    document.getElementById("h1Modify").innerHTML = name;
}