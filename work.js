var startBtn = document.getElementById("start");
var stopBtn = document.getElementById("stop");
var bool = true;
var seconds = 0;
var minutes = 0; 
var hours = 0;
var time = document.getElementById("time"); 


 function starts(){

    seconds = seconds + 1;
    if(seconds==60){
        minutes=minutes+1;
        seconds=0;
    }
    if(minutes==60){
        hours=hours+1;
        minutes=0;

    }
    if(bool==true){
    time.innerHTML = (hours.toString() + ":" + minutes.toString() + ":" + seconds.toString());
    }
}

startBtn.addEventListener("click",function(){
     myVar = setInterval(starts,1000);
});
stopBtn.addEventListener("click",function(){
    bool = false;
});

var body = document.body;
window.addEventListener("keypress",function(g){
  var letter = g.key;
  if (letter=="m"){
    var ne = document.createElement("p");
    ne.innerHTML = "Mark :" + document.getElementById("time").textContent;
    body.appendChild(ne);
  }
  if(letter == "`"){
      var ne = document.createElement("p");
      ne.innerHTML = "Start: " +  document.getElementById("time").textContent;
      body.appendChild(ne);
  }
  if(letter == "1"){
    var ne = document.createElement("p");
    ne.innerHTML = "End: " +  document.getElementById("time").textContent;
    body.appendChild(ne);
  }
});

if(annyang){
    console.log("annyang");
    var begCmnd= {"Mark" : function(){
        var ne = document.createElement("p");
        ne.innerHTML = "Start: " +  document.getElementById("time").textContent;
        body.appendChild(ne);
    }};

    var endCmnd = {"End" : function(){
        var ne = document.createElement("p");
        ne.innerHTML = "End: " +  document.getElementById("time").textContent;
        body.appendChild(ne);
    }};
annyang.addCommands(begCmnd);
annyang.addCommands(endCmnd);
annyang.start({continous : true});


}









