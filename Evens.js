



function getEvens(){
 
var start = parseInt(document.getElementsByName("startNumber")[0].value);
var end = parseInt(document.getElementsByName("endNumber")[0].value);
var step = parseInt(document.getElementsByName("step")[0].value);
var arr = [];

  if(isNaN(start) || isNaN(end) || isNaN(step)){
     document.getElementById("results").innerHTML = alert("Make sure all inputs are numbers!");
        
  }else if (Math.sign(start) !== 1 || Math.sign(end) !== 1 || Math.sign(step) !== 1){
     document.getElementById("results").innerHTML = alert("Only use positive Numbers");
     
 } else if(end <= start){
     document.getElementById("results").innerHTML = alert("The end number has to be larger then the start number");
     
 }else{
 
    for(var i = start; i < end; i += step){
if (i % 2 === 0){
    arr.push(i);
        }
    }
document.getElementById("results").innerHTML = arr.join();
  }
 
}


function emptyOutPut(){
    document.getElementById("results").innerHTML = "";
}
 
