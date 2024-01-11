window.addEventListener("load", function () {
    const loader = document.getElementById("loaderWrapper");
    loader.style.display = "none";
  });
  function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");
const link5 = document.getElementById("link5");
const link6 = document.getElementById("link6");
const link7 = document.getElementById("link7");
const link8 = document.getElementById("link8");
const link9 = document.getElementById("link9");

link1.addEventListener('click', () => {
    scrollToElement('.projects');
});

link2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.contact');
});

link3.addEventListener('click', () => {
    scrollToElement('.container');
});
link4.addEventListener('click', () => {
  scrollToElement('.contact');
});
link5.addEventListener('click', () => {
  scrollToElement('.nav');
});
link6.addEventListener('click', () => {
  scrollToElement('.projects');
});
link7.addEventListener('click', () => {
  scrollToElement('.nav');
});
link8.addEventListener('click', () => {
  scrollToElement('.container');
});
link9.addEventListener('click', () => {
  scrollToElement('.contact');
});