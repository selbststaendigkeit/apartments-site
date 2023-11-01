//механизм открывания главного меню
//    |
//    |
//    V
function menuToggle () {

    let togglerIconId = togglerIcon.getAttribute('id');

    if (togglerIconId == "burger") { //id используется для отслеживания состояния элемента

        mainMenu.setAttribute('class', 'header__main-menu header__main-menu--open main-menu');
        togglerIcon.setAttribute('id','cross');
        togglerIcon.setAttribute('src','img/cross.svg');
        togglerIcon.setAttribute('class','header__toggler-icon header__toggler-icon--open');

    } else {

        mainMenu.setAttribute('class', 'header__main-menu header__main-menu--closed main-menu');
        togglerIcon.setAttribute('id','burger');
        togglerIcon.setAttribute('src','img/burger.svg');
        togglerIcon.setAttribute('class','header__toggler-icon');

    }

}

let togglerButton = document.querySelector('.header__menu-toggler');
let mainMenu = document.querySelector('.header__main-menu');
let togglerIcon = document.querySelector('.header__toggler-icon');

togglerButton.onclick = menuToggle;


// механизм открытия-закрытия модального окна
//    |
//    |
//    V
function openModal () {
    modal.setAttribute('class','modal modal--open');
}

function closeModal () {
    modal.setAttribute('class','modal modal--closed');
}

let callbackButton = document.querySelector('.header__callback');
let modal = document.querySelector('.modal');
let modalCloseButton = document.querySelector('.modal__content-close');

callbackButton.onclick = openModal;
modalCloseButton.onclick = closeModal;