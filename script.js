(async function(){
    const url = "https://api.rawg.io/api/developers";
    const corsEnableUrl = "https://noroffcors.herokuapp.com/" + url;

    const response = await fetch(corsEnableUrl);
    const json = await response.json();
    console.log(json)
})();