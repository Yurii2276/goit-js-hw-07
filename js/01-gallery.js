import { galleryItems } from './gallery-items.js';
// Change code below this line
// import * as basicLightbox from './node_modules/basiclightbox/dist/basicLightbox.min.js';


const refs = {
    galleryList: document.querySelector(`.gallery`),
    galleryLink : document.querySelector(`.gallery__link`),
}

refs.galleryList.insertAdjacentHTML(`beforeend`, createGalleryMarkup(galleryItems));

refs.galleryList.addEventListener('click', handleGalleryItemClick);


function createGalleryMarkup(array) {
    return array.map(({ preview, description, original }) =>
        `<li class="gallery__item"><a class="gallery__link" href="${original}">
        <img class="gallery__image"
        src="${preview}" 
        alt="${description}"
        data-source="${original}"
        ></a></li>`).join(``);
}

function handleGalleryItemClick(event) {
    event.preventDefault();

    const target = event.target;

    if (target.classList.contains('gallery__image')) {
        const source = target.dataset.source;
        openModal(source);
    }
}

function openModal(source) {
    const instance = basicLightbox.create(`<img src="${source}">`);
    instance.show();
}



