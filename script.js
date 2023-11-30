document.addEventListener("DOMContentLoaded", function () {
    // Function to get a random integer between min (inclusive) and max (exclusive)
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    // Function to set a random image source for an element
    function setRandomImage(element, folder, count) {
        const randomIndex = getRandomInt(1, count + 1);
        const imagePath = `images/${folder}/${randomIndex}.png`;
        element.src = imagePath;
    }

    // Set random images for each element
    setRandomImage(document.getElementById("torso"), "torso", 2); // Assuming you have 3 torso images
    setRandomImage(document.getElementById("head"), "head", 35); // Assuming you have 3 head images
    setRandomImage(document.getElementById("background"), "background", 3); // Assuming you have 3 background images
    setRandomImage(document.getElementById("icon"), "icon", 3); // Assuming you have 3 icon images
});