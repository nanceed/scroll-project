// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read- only window propert that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string.
//offsetTop - A number, representing the top position of the element, in pixels.

// ************ set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ************ close links ***********
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener('click', function () {
    //linksContainer.classList.toggle("show-links");
    //can use this if you're not using any dynamic data
    const containerHeight = linksContainer.getBoundingClientRect().height;
    //console.log(containerHeight);
    const linksHeight = links.getBoundingClientRect().height;
    console.log(linksHeight);

if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
} else {
    linksContainer.style.height = 0;
    }
});

// ************ fixed navbar **********

// ************ smooth scroll **********

// select links 