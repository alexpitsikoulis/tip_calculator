var button15 = document.getElementById('15');
var button20 = document.getElementById('20');
var button25 = document.getElementById('25');

// define functions for all 3 buttons (15%,20%,25%)
var tip15 = function() {
    var list = document.getElementsByTagName('ul')[0];
    list.removeChild(list.childNodes[0]);
    var input = document.getElementById('input').value;
    var fifteen = document.createElement('li');
    fifteen.innerHTML = "Tip - $" + (Math.round((input * 0.15)*100)/100) + "||Total - $" +(Math.round((input * 1.15)*100)/100);
    document.getElementsByTagName('ul')[0].appendChild(fifteen);
    alert("Try a bigger tip!");
}
var tip20 = function() {
    var list = document.getElementsByTagName('ul')[0];
    list.removeChild(list.childNodes[0]);
    var input = document.getElementById('input').value;
    var twenty = document.createElement('li');
    twenty.innerHTML = "Tip - $" + (Math.round((input * 0.2)*100)/100) + "||Total - $" + (Math.round((input * 1.2)*100)/100);
    document.getElementsByTagName('ul')[0].appendChild(twenty);
}
var tip25 = function() {
    var list = document.getElementsByTagName('ul')[0];
    list.removeChild(list.childNodes[0]);
    var input = document.getElementById('input').value;
    var twentyfive = document.createElement('li');
    twentyfive.innerHTML = "Tip - $" + (Math.round((input * 0.25)*100)/100) + "||Total - $" + (Math.round((input * 1.25)*100)/100);
    document.getElementsByTagName('ul')[0].appendChild(twentyfive);
}

button15.addEventListener('click', tip15);
button20.addEventListener('click', tip20);
button25.addEventListener('click', tip25);
