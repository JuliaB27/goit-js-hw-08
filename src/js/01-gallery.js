// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const createMarkup = galleryItems.map(({preview, original, description}) => 
    `<li class="gallery__item">
  <a class="gallery_link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
).join('');
gallery.insertAdjacentHTML('beforeend', createMarkup);

var lightbox = new SimpleLightbox('.gallery a', { 
    captionPosition: 'bottom',
    captionsData: 'alt',
    captionDelay: 250
 });