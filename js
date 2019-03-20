var div = document.getElementsByTagName('div');
console.log(div[0].getElementsByTagName('span').length);
var start = {
  x : 0,
  y : 0
}
var finish = {
  x : 0,
  y : 0
}
for(var i = 0; i < div[0].getElementsByTagName('span').length; i++){
  if(div[0].getElementsByTagName('span')[i].className == 'enter'){
    div[0].getElementsByTagName('span')[i].style.color = "green";
    start.x = i;
  }
}
console.log(start)
