const url = "citation.json"
let btn = document.getElementById('btn');
let avatar = document.getElementById('avatar');
let citation = document.getElementById('citation');
let text = document.getElementById('nom');
let citations = [];
text.style.fontFamily = "fantasy";
citation.style.fontStyle = "italic";

btn.addEventListener('click', updatePage);

fetch(url).then((data) =>{
    data.json().then((data) => {
        citations = data;
        console.log(citations);
        });
});

function updatePage(){
    let random = Math.floor(Math.random() * (citations.length - 0));
    let randomCitation = citations[random];

    text.innerHTML = randomCitation["nom"];
    citation.innerHTML = randomCitation["citation"];
    avatar.setAttribute('src', randomCitation["image"]);
}