"use strict"


// 1. Напишіть функцію, яка буде викликатись при натисканні на клавішу Enter в інпуті і буде відображати введений текст в параграфі.
let input1 = document.getElementById("input1");
let outInput1 = document.getElementById("outInput1");

input1.addEventListener("keydown", function(e) {
    if (e.code === "Enter") {  //перевіряє, чи є натиснута клавіша "Enter"
        outInput1.textContent = input1.value;
        input1.value = "";
    }
});



// 2. Напишіть функцію, яка буде викликатись при введенні тексту в інпут і буде відображати введений текст в параграфі.
let input2 = document.getElementById("input2");
let outInput2 = document.getElementById("outInput2");

input2.addEventListener("input", function () { // подія input дозволяє в режимі онлайн зчитувати данні з інпута
    outInput2.textContent = input2.value; // передає відразу данні з inputa в <p>
});
input2.addEventListener("keydown", function(e) {
    if (e.code === "Enter") {  //перевіряє, чи є натиснута клавіша "Enter"
        input2.value = "";
        outInput2.textContent = "";
    }
});



// 3. Напишіть функцію, яка буде викликатись при відведенні курсора від елементу і буде змінювати колір.
let input3 = document.getElementById("input3");
let outInput3 = document.getElementById("outInput3");

input3.addEventListener("mouseout", () => {

    let letters = '0123456789ABCDEF';
    let color = '#';
    getRandomColor() // викликаємо функцію яка робить рандомний колір

    function getRandomColor() {
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        } return color;
    }

    outInput3.style.background = color; // виводимо рандомний бекграунд для параграфа
    input3.value = "";
});



// 4. Напишіть функцію, яка буде викликатись при наведенні курсора на елемент і буде додавати клас для зміни стилю(стилі на ваш вибір).
let input4 = document.getElementById("input4");
let outInput4 = document.getElementById("outInput4");
let video = document.querySelector(".video");
let videoText = document.querySelector(".videoText");

input4.addEventListener("mousemove", () => {
    input4.classList.add("task4");
    outInput4.classList.add("task4");
    video.style.display = "block";
    videoText.style.display = "block";
});


let btn = document.getElementById("btn5");

btn.addEventListener("click", () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    getRandomColor() // викликаємо функцію яка робить рандомний колір
    function getRandomColor() {
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        } return color;
    }
    document.body.style.background = color;
});



