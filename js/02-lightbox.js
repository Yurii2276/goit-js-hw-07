import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = {
    galleryList: document.querySelector(`.gallery`),
    galleryLink : document.querySelector(`.gallery__link`),
}

refs.galleryList.insertAdjacentHTML(`beforeend`, createGalleryMarkup(galleryItems));


function createGalleryMarkup(array) {
    return array.reduce((acum, )) 
    
    sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15
    
    array.map(({ preview, description, original }) =>
        `<li class="gallery__item"><a class="gallery__link" href="${original}">
        <img class="gallery__image"
        src="${preview}" 
        alt="${description}"
        data-source="${original}"
        ></a></li>`).join(``);
}


console.log(galleryItems);
