import Developer from "./Developer.js";

(async function () {
    // select before the try so we can use it in the catch too
    const developerContainer = document.querySelector(".developer-container");

    try {
        const url = "https://api.rawg.io/api/developers";
        const response = await fetch(url);
        const json = await response.json();

        const developers = json.results;

        developerContainer.innerHTML = "";

        // create HTML for each item using a class
        developers.forEach(function (developer) {
            const dev = new Developer(developer.name, developer.image_background);
            developerContainer.innerHTML += dev.render();
        });
    } catch (error) {
        console.log(error);
        developerContainer.innerHTML = error;
    }
})();
