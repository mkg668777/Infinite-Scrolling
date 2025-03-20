// script.js
const accessKey = '8s3wgzQNwMfA_mWrO1Q5sJcJXtrnuIybwcvHDhEwEaw'; // Replace with your Unsplash API key
const gallery = document.getElementById('gallery');
const loader = document.getElementById('loader');
let page = 1;

async function fetchImages() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos?page=${page}&per_page=10&client_id=${accessKey}`);
        const data = await response.json();
        displayImages(data);
        page++;
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}

function displayImages(images) {
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.urls.regular;
        imgElement.alt = image.alt_description;
        gallery.appendChild(imgElement);
    });
}

function handleScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        fetchImages();
    }
}

window.addEventListener('scroll', handleScroll);
fetchImages();