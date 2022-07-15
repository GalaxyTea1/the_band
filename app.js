const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.js-modal-close');
const modalContainer = document.querySelector('.js-modal-container');

function showTicket() {
    modal.classList.add('modal-open');
}

function hideTicket() {
    modal.classList.remove('modal-open');
}

for (buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showTicket);
}

modalClose.addEventListener('click', hideTicket);

modal.addEventListener('click', hideTicket);
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation();
});

let header = document.getElementById('header');
let mobileMenu = document.getElementById('mobile-menu');
let headerHeight = header.clientHeight;

mobileMenu.onclick = function () {
    let isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}
let menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (i = 0; i < menuItems.length; i++) {
    let menuItem = menuItems[i];
    menuItem.onclick = function (event) {
        let isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains("subnav");
        if (isParentMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    }
}



