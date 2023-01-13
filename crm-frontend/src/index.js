import './index.html';
import './main.scss';

document.addEventListener('DOMContentLoaded', function() {
    const API_URL = 'http://localhost:3000/api'
    let btnChangeUser = document.querySelector('.table__block .table__btn--change');
    let btnDeleteUser = document.querySelector('.clients .table__btn--delete');
    let btnExitChangePopup = document.querySelector('.popup--change .popup__btn-exit');
    let btnExitDeletePopup = document.querySelector('.popup--delete .popup__btn-exit');
    let popupChange = document.querySelector('.popup--change');
    let popupDelete = document.querySelector('.popup--delete');
    let popupAdd = document.querySelector('.popup--add');
    let bg = document.querySelector('.bg');

    // Popup - Создать контакт
    let btnAddUser = document.querySelector('.clients .clients__btn');
    let btnExitAddPopup = document.querySelector('.popup--add .popup__btn-exit');
    let btnCancelAddPopup = document.querySelector('.popup--add .form__btn--cancel');
    let btnAddContactNewUser = document.querySelector('.popup--add .form__contacts .contacts__btn');
    let btnSaveUser = document.querySelector('.popup--add .form__btn--save');

    btnAddUser.addEventListener('click', () => {
        popupAdd.classList.toggle('popup--add-active');
        bg.classList.toggle('bg--active');
    })

    btnExitAddPopup.addEventListener('click', () => {
        popupAdd.classList.remove('popup--add-active');
        bg.classList.toggle('bg--active');
    })

    btnCancelAddPopup.addEventListener('click', (e) => {
        e.preventDefault();
        popupAdd.classList.remove('popup--add-active');
        bg.classList.toggle('bg--active');
    })

    btnAddContactNewUser.addEventListener('click', (e) => {
        e.preventDefault();
        e.currentTarget.insertAdjacentHTML('beforebegin', `
        <div class="contacts__row">
            <select name="contacts" class="form__select">
                <option value="Phone">Телефон</option>
                <option value="Other-phone">Доп. телефон</option>
                <option value="Email">Email</option>
                <option value="Vk">Vk</option>
                <option value="Fb">Fb</option>
            </select>
            <input type="text" class="form__inp">
            <button class="form__button form__btn--remove"></button>
        </div>
        `)
    });

    btnSaveUser.addEventListener('click', (e) => {
        e.preventDefault();
        let data = {};

        let firstName = document.getElementById('addFirstName');
        let lastName = document.getElementById('addlastName');
        let secondName = document.getElementById('addSecondName');

        let contacts = document.querySelectorAll('.popup--add .contacts__row');
        let contactsData = [];

        for (let contact of contacts) {
            let contactType = contact.querySelector('.form__select').value;
            let contactValue = contact.querySelector('.form__inp').value

            contactsData.push({
                type: contactType,
                value: contactValue
            })
            // console.log(`Type: ${contactType} | Value: ${contactValue}`);
        }

        data = {
            name: firstName.value,
            surname: lastName.value,
            lastName: secondName.value,
            contacts: contactsData,
        }

        // console.log('data - ', data);

        // console.log('contacts - ', contacts);

        addUser(data)
    })



    // Popup - Изменить контакт
    
    btnChangeUser.addEventListener('click', () => {
        popupChange.classList.toggle('popup--change-active');
        bg.classList.toggle('bg--active');
    });

    btnExitChangePopup.addEventListener('click', () => {
        popupChange.classList.remove('popup--change-active');
        bg.classList.toggle('bg--active');
    })

    //Popup - Удалить контакт
    btnExitDeletePopup.addEventListener('click', () => {
        popupDelete.classList.remove('popup--delete-active');
        bg.classList.toggle('bg--active');
    })

    btnDeleteUser.addEventListener('click', () => {
        popupDelete.classList.toggle('popup--delete-active');
        bg.classList.toggle('bg--active');
    })

    bg.addEventListener('click', () => {
        popupChange.classList.remove('popup--change-active');
        popupDelete.classList.remove('popup--delete-active');
        bg.classList.toggle('bg--active');
    })


    let getUsers = async () => {
        const response = await fetch(`${API_URL}/clients`);
        const data = await response.json();

        console.log(data);
    }

    let addUser = async (user) => {
        const response = await fetch(`${API_URL}/clients`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        })

        let result = await response.json();

        console.log(result);
    }

    getUsers();
})