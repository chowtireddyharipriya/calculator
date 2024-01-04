var inputfield=document.getElementById("inputf");
var inputvalue=document.getElementById("inp");
function turnoff(){
  
    inputfield.style.visibility="hidden";
}
function turnon(){
    inputfield.style.visibility="visible";
}
function getvalue(num){
inputvalue.value=inputvalue.value+num;
}
function clacuate(){
    inputvalue.value=eval(inputvalue.value)
}
function clearonechar(){
    inputvalue.value=inputvalue.value.slice(0,-1)
}
function clearAll(){
    inputvalue.value="";
}