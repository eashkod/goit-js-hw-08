// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector(".gallery");

const makeGalleryItemsMarkup = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML("afterbegin", makeGalleryItemsMarkup);

function createGalleryItems(evt) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"> 
            </img>
          </a>
          </div>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox('.gallery a', {
    /* options */
  captionSelector: "img",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  scrollZoom: false,
});

console.log(galleryItems);
