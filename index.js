function somar(){
    var valor1 = parseInt(document.getElementById("valor1").value);
    var valor2 = parseInt(document.getElementById("valor2").value);

    var soma = valor1 + valor2;
    document.getElementById("resultado").value = soma;
}

function limpar() {
    var valor1Input = document.getElementById("valor1");
    var valor2Input = document.getElementById("valor2");
    var resultadoInput = document.getElementById("resultado");

    valor1Input.value = "";
    valor2Input.value = "";
    resultadoInput.value = "";

}

function subtrair() {
    var valor3 = parseInt(document.getElementById("valor3").value);
    var valor4 = parseInt(document.getElementById("valor4").value);

    var subtrai = valor3 - valor4;
    document.getElementById("resultado2").value = subtrai;
}
  

function limpar2() {
    var valor3Input = document.getElementById("valor3");
    var valor4Input = document.getElementById("valor4");
    var resultadoInput = document.getElementById("resultado2");

    valor3Input.value = "";
    valor4Input.value = "";
    resultadoInput.value = "";
}

function multiplicar(){
    var valor5 = parseInt(document.getElementById("valor5").value);
    var valor6 = parseInt(document.getElementById("valor6").value);

    var multiplica = valor5 * valor6;
    document.getElementById("resultado3").value = multiplica;
}   

function limpar3() {
    var valor5Input = document.getElementById("valor5");
    var valor6Input = document.getElementById("valor6");
    var resultadoInput = document.getElementById("resultado3");

    valor5Input.value = "";
    valor6Input.value = "";
    resultadoInput.value = "";
}

function dividir(){
    var valor7 = parseInt(document.getElementById("valor7").value);
    var valor8 = parseInt(document.getElementById("valor8").value);

    var dividi = valor7 / valor8;
    document.getElementById("resultado4").value = dividi;
}   

function limpar4() {
    var valor7Input = document.getElementById("valor7");
    var valor8Input = document.getElementById("valor8");
    var resultadoInput = document.getElementById("resultado4");

    valor7Input.value = "";
    valor8Input.value = "";
    resultadoInput.value = "";
}





