'use strict';

const galleryItems = [
  {
    preview: 'img/preview/preview-1.jpeg',
    fullview: 'img/fullview/fullview-1.jpeg',
    alt: 'alt text 1',
  },
  {
    preview: 'img/preview/preview-2.jpeg',
    fullview: 'img/fullview/fullview-2.jpeg',
    alt: 'alt text 2',
  },
  {
    preview: 'img/preview/preview-3.jpeg',
    fullview: 'img/fullview/fullview-3.jpeg',
    alt: 'alt text 3',
  },
  {
    preview: 'img/preview/preview-4.jpeg',
    fullview: 'img/fullview/fullview-4.jpeg',
    alt: 'alt text 4',
  },
  {
    preview: 'img/preview/preview-5.jpeg',
    fullview: 'img/fullview/fullview-5.jpeg',
    alt: 'alt text 5',
  },
  {
    preview: 'img/preview/preview-6.jpeg',
    fullview: 'img/fullview/fullview-6.jpeg',
    alt: 'alt text 6',
  },
];

const gallery = document.querySelector('.image-gallery');
const addClassForGallery = gallery.classList.add('js-image-gallery');
const fullview = createFullviewContainer();
const preview = createPreviewContainer();
gallery.append(fullview, preview);
const list = document.querySelector('.preview');
const images = list.querySelectorAll('img');
const imageFullview = document.querySelector('.image-fullview');

list.addEventListener('click', onListClick);

function createFullviewContainer() {
  const fullview = document.createElement('div');
  fullview.classList.add('fullview');

  const imageFullview = createImageFullview(galleryItems);
  fullview.append(imageFullview);

  return fullview;
}

function createPreviewContainer() {
  const list = document.createElement('ul');
  list.classList.add('preview');

  const imagePreview = createImagePreview(galleryItems);

  list.append(...imagePreview);

  return list;
}

function createImageFullview(element) {
  const image = document.createElement('img');
  image.classList.add('img-thumbnail', 'image-fullview');
  image.setAttribute('src', element[0].fullview);
  image.setAttribute('alt', element[0].alt);

  return image;
}

function createImagePreview(image) {
  let items = [];
  image.forEach(elem => {
    const item = document.createElement('li');
    const image = document.createElement('img');
    image.classList.add('img-thumbnail');
    image.setAttribute('src', elem.preview);
    image.setAttribute('data-fullview', elem.fullview);
    image.setAttribute('alt', elem.alt);
    item.append(image);
    items.push(item);
  });

  return items;
}

function onListClick({ target }) {
  const nodeName = target.nodeName;

  if (nodeName !== 'IMG') return;
  imageFullview.setAttribute('src', target.dataset.fullview);

  images.forEach(image => {
    if (image !== target) {
      image.classList.remove('effect');
    } else {
      image.classList.add('effect');
    }
  });
}