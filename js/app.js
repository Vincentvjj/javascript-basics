"use strict";

var name = 'Dave';
var fruits = ['apple', 'pear', 'kiwi', 'banana' ];
//alert('Hello ' + name);
var animalSound = document.getElementById('animalsound');

document.addEventListener('DOMContentLoaded', function() {
    var msgElem = document.getElementById('message');
    msgElem.innerHTML = 'Hello ' + name;
    var fruitLi;

    var i;
    var fruitListE = document.getElementById('fruit-list');
    for (i = 0; i < fruits.length; ++i) {
        console.log(fruits[i]);

        fruitLi = document.createElement('li');
        fruitLi.innerHTML = fruits[i];
        fruitListE.appendChild(fruitLi);

        msgElem.innerHTML += fruits[i];
    }

    var animalPic = document.getElementById('animal-picture');
    animalPic.addEventListener('click', function () {
        msgElem.innerHTML = 'woof!';

        window.setInterval(function () {
            animalSound.play();
        }, 3000)

        for (var idx = 0; idx < 11; idx++) {
            alert('');

        }

    });

    window.setInterval(function () {
        document.getElementById('clock').innerHTML = new Date().toLocaleString();

    }, 1000);
});


