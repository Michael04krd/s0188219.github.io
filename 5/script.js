document.getElementById("ug").addEventListener("click", function () {
    const kolvo = document.getElementById("kol").value;
    const good = document.getElementById("good").value;
    const resul = document.getElementById("result");
    const res = kolvo * good;

    const reg = /^[1-9][0-9]*$/;
    if (reg.test(kolvo)) {
        resul.textContent = "Стоимость товара: " + res;
        resul.style.cssText = "opacity: 1";
    } else {
        resul.textContent = "Некорректное количество товара!";
        resul.style.cssText = "opacity: 1; background-color: red";
    }
});
