"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal);

const closeModal = function () {
  //refactoring
  modal.classList.add("hidden"); //onclick adds the class back
  overlay.classList.add("hidden"); //onclick adds the class back
};

const openModal = function () {
  //refactoring
  modal.classList.remove("hidden"); //removes the hidden class which means that the modal is gonna appear with an onclick event. (inside the css the hidden class has display: hidden)
  overlay.classList.remove("hidden"); //same here
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal); //if u press outside the modal it closes it

document.addEventListener("keydown", function (e) {
  //listens to any key pressed //e stands for event and whenever a key is pressed it is passed to the function. if i press enter it passes enter, if i press 1 it passes 1. asme for ESCAPE.
  console.log(e.key); //e.keylogs in the pressed key
  if (e.key === "Escape" && !modal.classList.contains("hidden"))
    //if keypressed is escape AND modal does not contain the hidden class then
    closeModal(); //closemodal
});
