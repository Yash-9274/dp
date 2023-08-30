
const projectImages = [
    '25231.png',
    'cover.jpg'
    
    // Add more image filenames as needed
];

const projectImagesContainer = document.querySelector('.project-images');

function preloadImages() {
    for (const imageUrl of projectImages) {
        const img = new Image();
        img.src = imageUrl;
    }
}

function createImageElements() {
    for (const imageUrl of projectImages) {
        const imgElement = document.createElement('img');
        imgElement.classList.add('project-image');
        imgElement.src = imageUrl;
        projectImagesContainer.appendChild(imgElement);
    }
}

preloadImages();
createImageElements();
