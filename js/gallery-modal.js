var gallery_btn1 = document.getElementById('gallery__modal1-btn');
var gallery_close_btn1 = document.getElementById('gallery__modal1-close');
var gallery_content1 = document.getElementById('gallery__modal1');

gallery_btn1.onclick = function() {
    gallery_content1.style.visibility = "visible";
    gallery_content1.style.opacity = "1";
}

gallery_close_btn1.onclick = function() {
    gallery_content1.style.visibility = "hidden";
    gallery_content1.style.opacity = "0";
}

window.onclick = function(event) {
    if (event.target == gallery_content1) {
        gallery_content1.style.visibility = "hidden";
        gallery_content1.style.opacity = "0";
    }
}


// ///////////////////////////////////////////////////////////////////


// var gallery_btn = document.getElementsByClassName('gallery-btn-for-modal');
// var gallery_close_btn = document.getElementsByClassName('gallery__modal-close');
// var gallery_content = document.getElementsByClassName('gallery__modal');

// for (let i = 0; i < gallery_btn.length; i++) {
//     gallery_btn[i].onclick = function() {
//         gallery_content[i].style.visibility = "visible";
//         gallery_content[i].style.opacity = "1";
//     }
    
//     gallery_close_btn[i].onclick = function() {
//         gallery_content[i].style.visibility = "hidden";
//         gallery_content[i].style.opacity = "0";
//     }
    
//     window.onclick = function(event) {
//         if (event.target == gallery_content[i]) {
//             gallery_content[i].style.visibility = "hidden";
//             gallery_content[i].style.opacity = "0";
//         }
//     }
// }


// ///////////////////////////////////////////////////////////////////


// function openModal(elementik) {
//     elementik.style.visibility = "visible";
//     elementik.style.opacity = "1";
// }

// function closeModal(element) {
//     element.style.visibility = "hidden";
//     element.style.opacity = "0";
// }

// gallery_btn1.onclick = openModal(gallery_content1)
// gallery_close_btn1.onclick = closeModal(gallery_content1)


// window.onclick = function(event) {
//     if (event.target == gallery_content1) {
//         closeModal(gallery_content1);
//     }
// }

// ///////////////////////////////////////////////////////////////////

// const btn = document.querySelector('.btn');
// const modalsBlock = document.querySelector('.modals');
// const closeModalBtn = document.querySelector('.modal-close');
// const body = document.body;

// const openModal = () => {
//     modalsBlock.classList.add('is-open');
//     body.classList.add('lock-scroll');
// };

// const closeModal = () => {
//     modalsBlock.classList.remove('is-open');
//     body.classList.remove('lock-scroll');
// };

// const isModalOpened = () => {
//     return modalsBlock.classList.contains('is-open');
// };

// btn.addEventListener('click', () => {
//     openModal();

//     window.addEventListener('keydown', function(e) {
//         if (e.key == 'Escape' && isModalOpened()) {
//             closeModal();
//         }
//     });
// });

// closeModalBtn.addEventListener('click', () => {
//     closeModal();
// });

// modalsBlock.addEventListener('click', function(e) {
//     if (!e.target.classList.contains('modal') && !e.target.closest('.modal') && isModalOpened()) {
//         closeModal();
//     }
// });
