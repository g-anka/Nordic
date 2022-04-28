function init() {
  let value = 0;

  const buttonPlus = document.querySelector(".js-plus");
  const buttonMinus = document.querySelector(".js-minus");
  const valueEl = document.querySelector(".js-value");
  const diffEl = document.querySelector(".js-diff");

  const max = 50;
  const min = -50;

  valueEl.innerText = value;

  function colorDiv() {
    if (value <= 10) {
      valueEl.style.color = "#000";
    } else if ((value > 10 || value <=20)) {
      valueEl.style.color = "#f00";
    } else if (value > 20) {
      valueEl.style.color = "#00f";
    }
  }

  function plusClick() {
    const diff = value < max ? Number(diffEl.value) : 0;
    value = value + diff;
   // value = value + Number(diffEl.value);
    valueEl.innerText = value;
    colorDiv();
  }

  function minusClick() {
    if (value > min) {
      value = value - Number(diffEl.value);
      valueEl.innerText = value;
    } else {
      alert("Достигнут максимум")
    }
    colorDiv();
  }

  buttonPlus.onclick = plusClick;
  buttonMinus.onclick = minusClick;
}

window.onload = init;
