const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];



const galleryContainer = document.getElementById("gallery");
let instance;

galleryContainer.addEventListener('click', function(event) {
    const galleryLink = event.target.closest('.gallery-link');

    if (galleryLink) {
        event.preventDefault();

        const imageData = {
            original: galleryLink.href,
            description: galleryLink.querySelector('img').alt,
        };

        if (!instance) {
            instance = basicLightbox.create('', {
                onShow: () => {
                    document.addEventListener('keydown', handleKeyPress);
                },
                onClose: () => {
                    document.removeEventListener('keydown', handleKeyPress);
                }
            });
        }

        instance.element().innerHTML = `<img src="${imageData.original}" alt="${imageData.description}">`;
        instance.show();
    }
});

function handleKeyPress(event) {
    if (event.key === 'Escape') {
        instance.close();
    }
}

const fragment = document.createDocumentFragment();

images.forEach((imageData) => {
    const galleryItem = document.createElement("li");
    galleryItem.classList.add("gallery-item");

    const galleryLink = document.createElement("a");
    galleryLink.classList.add("gallery-link");
    galleryLink.href = imageData.original;

    const imageElement = document.createElement("img");
    imageElement.classList.add("gallery-image");
    imageElement.src = imageData.preview;
  imageElement.alt = imageData.description;
  imageElement.dataset.source = imageData.original;

    galleryLink.appendChild(imageElement);
    galleryItem.appendChild(galleryLink);
    fragment.appendChild(galleryItem);
});

galleryContainer.appendChild(fragment);




  


