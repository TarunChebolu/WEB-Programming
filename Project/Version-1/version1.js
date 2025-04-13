function setUp(){
    for (var i=0; i<10; i++){
        addNode();
    }
}

nodesArray = [];
function addNode(){
    let x = 100 + Math.random() * 1000;
    let y = 100 + Math.random() * 1000;

    for (var i=0; i<nodesArray.length; i++){
        if (distanceBetweenNodes(nodesArray[i], [x, y]) < 100){
            //alert("oops");
            addNode();
            return;
        }else{
            continue;
        }
    }

    nodesArray.push([x,y]);
    let newNode = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    newNode.classList.add("node");
    newNode.setAttributeNS(null, "id", "node"+nodesArray.length);
    
    newNode.setAttributeNS(null, "cx", x+"px");
    newNode.setAttributeNS(null, "cy", y+"px");
    newNode.setAttributeNS(null, "r", 25);
    newNode.setAttributeNS(null, "stroke", "white");
    newNode.setAttributeNS(null, "stroke-width", 4);
    newNode.setAttributeNS(null, "fill", "light-blue");

    
    document.getElementById("svgScreen").appendChild(newNode);

    return;
}

function drawChannels(){
    for (var i=0; i<nodesArray.length; i++){
        let connectionCount = 0;
        for (var j=0; j<nodesArray.length-1; j++){
            if (j==i){
                continue;
            }
            if (Math.random() < 1/distanceBetweenNodes(nodesArray[i], nodesArray[j])){
                connectionCount+=1;
                newChannel = document.createElementNS("http://www.w3.org/2000/svg", "line");

                newChannel.setAttributeNS(null, "id", "channel"+i+j);
                newChannel.setAttributeNS(null, "x1", nodesArray[i][0]);
                newChannel.setAttributeNS(null, "y1", nodesArray[i][1]);
                newChannel.setAttributeNS(null, "x2", nodesArray[j][0]);
                newChannel.setAttributeNS(null, "y2", nodesArray[j][1]);
                newChannel.setAttributeNS(null, "stroke", "white");
                newChannel.setAttributeNS(null, "stroke-width", 4);

                document.getElementById("svgScreen").appendChild(newChannel);

            }
        }
        console.log(connectionCount);
        if (connectionCount==0){
            i -= 1;
        }
    }
}

function distanceBetweenNodes(pointA, pointB){
    let differenceX = pointA[0] - pointB[0];
    let differenceY = pointA[1] - pointB[1];

    return Math.sqrt(Math.pow(differenceX, 2) + Math.pow(differenceY, 2));
}