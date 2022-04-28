function init() {
    //DIV
    let elDiv = document.body.firstElementChild;
    let elDiv2 = document.getElementsByTagName("div");
    let elDiv3 = document.querySelector("div");
    let elDiv4 = document.body.children[0];
    console.log("elDiv: ", elDiv);
    console.log("elDiv2: ", elDiv2);
    console.log("elDiv3: ", elDiv3);
    console.log("elDiv4: ", elDiv4);

    //UL
    let elUl = document.body.children[1];
    let elUl2 = document.querySelector("ul")
    let elUl3 = document.getElementsByTagName("ul");
    let elUl4 = elDiv.nextElementSibling;
    let elUl5 = document.body.children[2].previousElementSibling; //от тэга script
    console.log("elUl: ", elUl);
    console.log("elUl2", elUl2);
    console.log("elUl3", elUl3);
    console.log("elUl4", elUl4);
    console.log("elUl5", elUl5);

    //second LI
    let myLi = elUl.childNodes[3];
    let myLi2 = elUl.children[1];
    let myLi3 = elUl.lastElementChild;
    let myLi4 = document.querySelectorAll("li")[1];
    let myLi5 = document.getElementsByTagName("li")[1];
    console.log("myLi: ", myLi);
    console.log("myLi2: ", myLi2);
    console.log("myLi3: ", myLi3);
    console.log("myLi4: ", myLi4);
    console.log("myLi5: ", myLi5);
}

window.onload = init;


