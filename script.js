'use strict';
// deixei alguns comentarios no css e no html
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); // ao adicionarmos o All ao query selector estamos a dizer q queremos selecionar todas e n so a primeira
const closeModal = function () {
  //refactoring.
  modal.classList.add('hidden'); // este codigo estava tanto no btnclosemodal.addeventlistener como no overlay.addeventlistener
  overlay.classList.add('hidden');
};
const openModal = function () {
  //refactoring
  modal.classList.remove('hidden'); // estamos a remover a class hidden da modal no html e isto faz com que ela apareca no click dos butoes. // este codigo estava no for loop em baixo
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//classlist vai buscar as classes do eleemento que selecionámos e podemos adiconar/remover, etc
document.addEventListener('keydown', function (e) {
  console.log(e.key); //.key vai buscar a tecla q está a ser pressionada
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    //caso a tecla pressionada seja esc e a modal n tenha a class hidden então executa a função
    closeModal();
  }
});
