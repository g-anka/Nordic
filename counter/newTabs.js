function init() {

    let index = 1;
    let addedWidth = 50;

    const buttonPlus = document.querySelector(".js-plus");
    const buttonMinus = document.querySelector(".js-minus");

    function plusClick() {
        const el = document.createElement("button");
        el.className = "tab";
        document.body.appendChild(el);
        el.innerText = `Tab ${index}`
        index ++
        el.style.width = `${addedWidth}px`
        addedWidth ++

        if (index % 2 === 0) {
            el.style.backgroundColor = "#ffd418"
        } else {
            el.style.backgroundColor = "#18ff9e"
        }
    }

    function minusClick() {
        const lastTab = document.querySelector(".tab:last-child");
        document.body.removeChild(lastTab)
    }

    buttonPlus.onclick = plusClick;
    buttonMinus.onclick = minusClick;
}

window.onload = init;
