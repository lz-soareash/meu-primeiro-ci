const soma = require("./index");

if (soma(2, 2) !== 4) {
throw new Error ("FALHOU: soma (2, 2) deveria ser 4!    " );
}

if (soma(0, 0) !== 0 ) {
throw new Error("FALHOU: soma (0,0) deveria ser 0!");
}

console.log("todos os testes passaram!");