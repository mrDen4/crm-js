import './index.html';
import './main.scss';

document.addEventListener('DOMContentLoaded', function() {
    let btnChangeUser = document.querySelector('.table__block .table__btn--change');
    let btnExitPopup = document.querySelector('.form__btn-exit');
    let popupChange = document.querySelector('.popup--change');
    let bg = document.querySelector('.bg');
    
    btnChangeUser.addEventListener('click', () => {
        popupChange.classList.toggle('popup--change-active');
        bg.classList.toggle('bg--active');
    });

    btnExitPopup.addEventListener('click', () => {
        popupChange.classList.toggle('popup--change-active');
        bg.classList.toggle('bg--active');
    })

    bg.addEventListener('click', () => {
        popupChange.classList.toggle('popup--change-active');
        bg.classList.toggle('bg--active');
    })
    
    console.log(btnChangeUser);
})