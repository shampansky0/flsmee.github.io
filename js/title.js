// Credits to https://www.hscripts.com/scripts/JavaScript/title-scrol.php
var rev = "fwd";
function titlebar(val)
{
var res = "-";
var speed = 100;
var pos = val;
msg = "-x- flamee -x-";
var le = msg.length;
if(rev == "fwd"){
if(pos < le){
pos = pos+1;
scroll = msg.substr(0,pos);
document.title = scroll;
timer = window.setTimeout("titlebar("+pos+")",speed);
}else{
rev = "bwd";
timer = window.setTimeout("titlebar("+pos+")",speed);
  }
}else{
if(pos > 0){
pos = pos-1;
var ale = le-pos;
scrol = msg.substr(ale,le);
document.title = scrol;
timer = window.setTimeout("titlebar("+pos+")",speed);
}else{
rev = "fwd";
timer = window.setTimeout("titlebar("+pos+")",speed);
  }
}
}
titlebar(0);
