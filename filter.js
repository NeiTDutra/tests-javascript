let valor1 = parseInt(1046);
  
let titulo = '\nSaque de R$ ' + valor1 + ' ;\nResulta em ;'; 
console.log(titulo);

let notade = [100, 50, 20, 10, 5, 2, 1];
  
let saque = notade.map( (el) => {
  
    valor1 = valor1 == null ? valor1 == 1 : valor1;
    let q = parseInt(valor1 / el);
    valor1 = parseInt(valor1 % el);
    let sq = '\n=> '+ q + ' nota(s) de R$ ' + el + ',00';
    return sq;
});

console.log(saque.join(' '));
