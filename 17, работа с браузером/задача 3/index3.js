let pTags = document.querySelectorAll("p");

for(let i = 0; i < pTags.length; i++) {
    pTags[i].innerHTML = i+1;
}