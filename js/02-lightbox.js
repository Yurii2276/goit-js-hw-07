import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = {
    galleryList: document.querySelector(`.gallery`),
    galleryLink : document.querySelector(`.gallery__link`),
}

refs.galleryList.insertAdjacentHTML(`beforeend`, createGalleryMarkup(galleryItems));

refs.galleryList.addEventListener('click', handleGalleryItemClick);

function createGalleryMarkup(array) {
    return array.reduce((acum, { preview, original, description }) => acum + `
    <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`, ``)
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
    const instance = new SimpleLightbox(`.gallery a`, {
        captions: true, captionsData: `alt`,
        captionPosition: 'bottom',
        captionDelay: 250,
    });
    instance.on('show.simplelightbox', () => {
        
    });
    instance.on('error.simplelightbox', e => {
        console.log('Error:', e); 
    });

}   
  
