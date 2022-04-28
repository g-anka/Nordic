let zzzClass = document.getElementsByClassName("zzz")

for(let i = 0; i < zzzClass.length; i++) {
    zzzClass[i].innerHTML = i+1;
    console.log("A", zzzClass[i])
}
