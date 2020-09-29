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
    console.log("done");
    for(var i = 0; i < sessionStorage.length;i++){
        console.log(sessionStorage.getItem(i) + ",");
    }
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
        var temp = document.getElementById("time").textContent;
        ne.innerHTML = "Mark: " + temp;
        sessionStorage.setItem(sessionStorage.length+1, convert(temp));
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

    function convert(x){
        var first = x.substring(0,x.indexOf(":"));
        var secondP = x.substring(x.indexOf(":") + 1, x.length);
        //console.log(secondP);
        var third = 0; 
        var sum;
        if (secondP.indexOf(":") != -1){
            sum = (parseInt(first)*3600) + parseInt((secondP.substring(0,secondP.indexOf(":")))*60) + parseInt(secondP.substring(secondP.indexOf(":") + 1, secondP.length));                                    
        }
        else{
            sum = parseInt(first)*60 + parseInt(secondP);
        }
        return sum; 
    }








