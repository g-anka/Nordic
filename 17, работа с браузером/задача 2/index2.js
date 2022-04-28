let tbody = document.querySelector("tbody");

for(let i = 0; i < tbody.children.length; i++) {
   let row = tbody.children[i];
   let cell = row.children[i]
   cell.style.backgroundColor = "red";
   console.log(cell);
}