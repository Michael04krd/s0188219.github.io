document.getElementById("ug").addEventListener("click", function () {
    const kolvo = document.getElementById("kol").value;
    const good = document.getElementById("good").value;
    const res = kolvo * good;
    

    const reg = /^[1-9][0-9]*$/;
    if(reg.test(kolvo)){
        document.getElementById("result").textContent = "Стоимость товара: " + res;
        document.getElementById("result").style.cssText = "opacity: 1";
    }
    else {
        document.getElementById("result").textContent = "Некорректное количество товара!";
        document.getElementById("result").style.cssText = "opacity: 1; background-color: red";
    }
});