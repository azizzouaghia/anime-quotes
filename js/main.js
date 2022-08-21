let request = new XMLHttpRequest(); 
request.onreadystatechange = function (){
    if(this.readyState === 4 && this.status){
        let quotes = JSON.parse(this.responseText);
        /* Info Fill Start*/
        let animeName = document.querySelector(".anime-name"); // Anime Name
        animeName.innerHTML= quotes.anime;
        let animeQuote = document.querySelector(".quote h5"); // Anime Quote
        animeQuote.innerHTML= quotes.quote;
        let characterName = document.querySelector(".character-name h5"); // Character Name
        characterName.innerHTML = `- ${quotes.character}`;
        document.querySelector("button").onclick = ()=>{ // New Quote
            location.reload();
        }
        /* Info Fill Ends*/
}}
request.open("GET", "https://animechan.vercel.app/api/random");
request.send(); 


