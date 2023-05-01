window.addEventListener("load", (event) => {

    let trigger_menu = document.querySelector('.trigger-menu');
    let nav = document.querySelector('nav');

    trigger_menu.addEventListener("click", function () {

        if (nav.classList.contains('nav--active')) {
            nav.classList.remove('nav--active');
            trigger_menu.classList.remove('active');
        } else {
            nav.classList.add('nav--active');
            trigger_menu.classList.add('active');

        }

    });






});




function inserir(valor) {
    document.getElementById("resultado").value += valor;
}

function limpar() {
    document.getElementById("resultado").value = "";
}

function calcular() {
    var expressao = document.getElementById("resultado").value;
    var resultado = eval(expressao);
    document.getElementById("resultado").value = resultado;
}