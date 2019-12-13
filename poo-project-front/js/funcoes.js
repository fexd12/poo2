function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("grid");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function TestaCPF(strCPF) {
    var Soma, Resto, borda_original;
    Soma = 0;
    var teste = strCPF;

    if (strCPF == "00000000000") {
        document.getElementById("cpf").setCustomValidity('CPF Invalido');
        return false;
    }
    if (strCPF.length >= 12) {
        document.getElementById("cpf").setCustomValidity('CPF Invalido');
        return false;
    }

    if (teste == null) {
        document.getElementById("cpf").setCustomValidity('Favor inserir um cpf');
        return false;
    }

    if (strCPF == "11111111111") {
        document.getElementById("cpf").setCustomValidity('CPF Invalido');
        return false;
    }

    for (i = 1; i <= 9; i++) {
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    }

    Resto = (Soma * 10) % 11;
    if ((Resto == 10) || (Resto == 11)) {
        Resto = 0;
    }

    if (Resto != parseInt(strCPF.substring(9, 10))) {
        document.getElementById("cpf").setCustomValidity('CPF Invalido');
        return false;
    }

    Soma = 0;
    for (i = 1; i <= 10; i++) {
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    }

    Resto = (Soma * 10) % 11;
    if ((Resto == 10) || (Resto == 11)) {
        Resto = 0;
    }

    if (Resto != parseInt(strCPF.substring(10, 11))) {
        document.getElementById("cpf").setCustomValidity('CPF Invalido');
        return false;
    }

    document.getElementById("cpf").setCustomValidity('');
    return true;
}

var repeat = 1 // 0 para rolar uma vez, 1 para rolar infinitamente
var title = document.title
var leng = title.length
var start = 1
function titlemove() {
    titl = title.substring(start, leng) + title.substring(0, start)
    document.title = titl
    start++
    if (start == leng + 1) {
        start = 0
        if (repeat == 0)
            return
    }
    setTimeout("titlemove()", 500)  // aqui vc pode aumentar ou diminuir a velocidade 
}
if (document.title)
    titlemove()


