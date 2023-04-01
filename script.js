const a = document.querySelector("#a");
const b = document.querySelector("#b");
const c = document.querySelector("#c");

document.querySelector("#bt-calcular").addEventListener('click', function(){
    if (a.value != '' && b.value != '' && c.value != '') {

        let delta = (b.value * b.value) - 4 *a.value * c.value; 
        let x1 = (-b.value + Math.sqrt(delta))/(2 * a.value);
        let x2 = (-b.value - Math.sqrt(delta)) / (2 * a.value);
            
        document.querySelector("#delta").innerHTML = delta;
        document.querySelector("#x1").innerHTML = x1;
        document.querySelector("#x2").innerHTML = x2;

        document.querySelector("#result").classList.remove("hide");

    } else {
        alert("Preencha todos os campos!")
    }
});

document.querySelector("#bt-limpar").addEventListener('click', function(){
    a.value = "";
    b.value = "";
    c.value = "";
    document.querySelector("#result").classList.add("hide");
});