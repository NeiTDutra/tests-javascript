/*

Desafio 

O banco que você trabalha sempre tem problemas para organizar as filas de atendimento dos clientes.

Após uma reunião com a gerência ficou decidido que os clientes ao chegar na agência receberão uma senha numérica em seu aparelho de celular via sms e que a ordem da fila será dada não pela ordem de chegada, mas sim pelo número recebido via sms. Sendo, aqueles com número maior deverão ser atendidos primeiro. 

Então, dada a ordem de chegada dos clientes reordene a fila de acordo com o número recebido via sms, e diga quantos clientes não precisaram trocar de lugar nessa reordenação.

Entrada

A primeira linha contém um inteiro N, indicando o número de casos de teste a seguir.

Cada caso de teste inicia com um inteiro M (1 ≤ M ≤ 1000), indicando o número de clientes. Em seguida haverá M inteiros distintos Pi (1 ≤ Pi ≤ 1000), onde o i-ésimo inteiro indica o número recebido via sms do i-ésimo cliente.

Os inteiros acima são dados em ordem de chegada, ou seja, o primeiro inteiro diz respeito ao primeiro cliente a chegar na fila, o segundo inteiro diz respeito ao segundo cliente, e assim sucessivamente.

Saída

Para cada caso de teste imprima uma linha, contendo um inteiro, indicando o número de clientes que não precisaram trocar de lugar mesmo após a fila ser reordenada.

*/

//Declaração das variáveis
//#############################################################

//Inicia as variáveis locais

let lines_cases = 2;// => gets();
let n_sms = [3, 4];
let sms_client = [];
let n_sms_client = ['100 80 90', '100 120 30 50'];
let sms_client_order = [];

//Função que ordena a lista de forma decrescente
//#############################################################

function order(ord) {

  ord.sort( (a, b) => {
    
    return a - b;
  }).reverse();
  
  return ord;
}

//Laços para imprimir na saída a comparação das listas
//#############################################################

for(let i = 0; i < lines_cases; i ++) {
  
  n_sms = n_sms[i];// => gets();
  sms_client = n_sms_client[i].split(' ');//Lista oriiginal => gets();
  
  sms_client_order = order(n_sms_client[i].split(' '));//lista original ordenada e reversa
  
  let no_change = 0;
  
  for(let j = 0; j < n_sms; j ++) {
    
    if(sms_client_order[j] === sms_client[j]) {//Compara os elementos das listas
      
      no_change ++;//retorna posições que NÃO foram allteradas
    }
  }
  let l = i + 1;
  console.log('\nLista:__________________'+ l +'\nPosições não alteradas:_'+ no_change);
}

//Código que passou no desafio DIO
//#############################################################
/*
let lines_cases = gets();
let n_sms = [];
let sms_client = [];
let sms_client_order = [];

function order(ord){
  
  ord.sort( (a, b) => {
    
    return a - b;
  }).reverse();
  
  return ord;
}

for(let i = 0; i < lines_cases; i ++) {
  
  n_sms = gets();
  sms_client = gets();
  sms_client_order = order(sms_client.split(' '));
  
  let no_change = 0;
  sms_client = new Array(...sms_client.split(' '));
  
  for(let j = 0; j < n_sms; j ++) {
    
    if(sms_client_order[j] === sms_client[j]) {
      
      no_change ++;
    }
  }
  
  console.log(no_change);
}
/*


