var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello';

var myImage = document.querySelector('img');

var hdd1button = document.getElementById('hdd1 button');
var hdd2button = document.getElementById('hdd2 button');
var hdd3button = document.getElementById('hdd3 button');


var hdd1span = document.getElementById('hdd1 span');
var hdd2span = document.getElementById('hdd2 span');
var hdd3span = document.getElementById('hdd3 span');


hdd1button.onclick = function(){
  //myImage.setAttribute('src','images/1-xxl.png');
  var enterName = prompt('Enter Name');
  localStorage.setItem('name',enterName);
  hdd1span.textContent=enterName;
  
}

hdd2button.onclick = function(){
 // myImage.setAttribute('src','images/1-xxl.png');
  var enterName = prompt('Enter Name');
  localStorage.setItem('name',enterName);
  hdd2span.textContent=enterName;

}

hdd3button.onclick = function(){
 // myImage.setAttribute('src','images/1-xxl.png');
  var enterName = prompt('Enter Name');
  localStorage.setItem('name',enterName);
  hdd3span.textContent=enterName;

}