/* Load Page Start */
let Loader = document.getElementById("LoadPage");
window.addEventListener("load",()=>{
    Loader.style.display='none';
})
/* Load Page End */


let request = new XMLHttpRequest(); 
request.onreadystatechange = function (){
    if(this.readyState === 4 && this.status){
        let quotes = JSON.parse(this.responseText);
        /* Info Fill Start */
        let animeName = document.querySelector(".anime-name"); // Anime Name
        let Qarrayanime = quotes.anime.split(" "); // Edit Anime Name
        let Qanime = Qarrayanime.length === 1 ?  Qarrayanime[0] :  Qarrayanime.length === 3? Qarrayanime[0]+' '+Qarrayanime[1] +' '+Qarrayanime[2] : Qarrayanime[0]+' '+Qarrayanime[1] ;
        animeName.innerHTML= Qanime;
        let animeQuote = document.querySelector(".quote h5"); // Anime Quote
        animeQuote.innerHTML= quotes.quote;
        let characterName = document.querySelector(".character-name h5"); // Character Name
        let Qarraychar = quotes.character.split(" "); // Edit Anime Name
        let Qchar = Qarraychar.length === 1 ?  Qarraychar[0] : Qarraychar[0]+' '+Qarraychar[1]  ;
        characterName.innerHTML = `- ${Qchar}`;
        /* Info Fill Ends */
}}
request.open("GET", "https://animechan.vercel.app/api/random");
request.send();
document.querySelector("button").onclick = () => {
    request.open("GET", "https://animechan.vercel.app/api/random");
    request.send();
};

// Add The year
let year = document.getElementById("rightsyear");
let date = new Date();
year.innerHTML = date.getFullYear();