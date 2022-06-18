(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-s]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    
   
  };
  refs.openModalBtn.addEventListener('click',toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);


  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
// Function for franchise modal
(() => {
  const refs = {
    openModalBtnFr: document.querySelector('[data-modal-open-s-fr]'),
    closeModalBtnFr: document.querySelector('[data-modal-close-fr]'),
    modalFr: document.querySelector('[data-modal-fr]'),
    
   
  };
  refs.openModalBtnFr.addEventListener('click',toggleModalRf);
  refs.closeModalBtnFr.addEventListener('click', toggleModalRf);


  function toggleModalRf() {
    refs.modalFr.classList.toggle('is-hidden');
  }
})();

