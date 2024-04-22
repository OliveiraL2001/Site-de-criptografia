//1 funcoes criando as chaves 

function isPrimo(num) {
  if (num <= 1) {
      return false;
  }
  for (let i = 2; i < num; i++) {
      if (num % i === 0) {
          return false;
      }
  }
  return true;
}


function realizarCalculoN() {
  var numP = parseInt(document.getElementById("numP").value);
  var numQ = parseInt(document.getElementById("numQ").value);

  if (isPrimo(numP) && isPrimo(numQ)) {
      var N = numP * numQ;
      document.getElementById("N").textContent = "O resultado de N é: " + N;
  } else {
      document.getElementById("N").textContent = "Certifique-se de que P e Q sejam números primos.";
  }
}



function realizarCalculoG(){
  var numP = parseInt(document.getElementById("numP").value);
  var numQ = parseInt(document.getElementById("numQ").value);

  if (isPrimo(numP) && isPrimo(numQ)) {
      var G = (numP - 1)*(numQ-1) ;
      document.getElementById("G").textContent = "O resultado de G é: " + G;
  } else {
      document.getElementById("G").textContent = "Certifique-se de que P e Q sejam números primos.";
  }


}





function modInverse(J, vG) {
  J = ((J % vG) + vG) % vG; // Garante que 'J' seja positivo

  for (let x = 1; x < vG; x++) {
      if ((J * x) % vG === 1) {
          return x;
      }
  }

  return null; // Inverso multiplicativo não existe
}

function calcularinverso() {
  var J = parseInt(document.getElementById("J").value);
  var vG = parseInt(document.getElementById("vG").value);

  if (!isNaN(J) && !isNaN(vG) && vG !== 0) {
      const inverse = modInverse(J, vG);

      if (inverse !== null) {
          document.getElementById("resultado").textContent = `O inverso multiplicativo de ${J} módulo ${vG} é ${inverse}`;
      } else {
          document.getElementById("resultado").textContent = `O inverso multiplicativo de ${J} módulo ${G} não existe`;
      }
  } else {
      document.getElementById("resultado").textContent = "Certifique-se de que os valores de J e G sejam números válidos.";
  }
}



//2 funcos criptografando
function mensagemParaASCII(mensagem) {
  var tabelaASCII = [];
  for (var i = 0; i < mensagem.length; i++) {
    var char = mensagem[i];
    var codigoASCII = char.charCodeAt(0);
    tabelaASCII.push(codigoASCII);
  }
  return tabelaASCII;
}

function converterParaASCII() {
  var mensagem = document.getElementById('mensagem').value;
  var tabela = mensagemParaASCII(mensagem);
  var tabelaASCIIElement = document.getElementById('tabelaASCII');
  tabelaASCIIElement.textContent = tabela.join(' ');
}


function calcularmodexponencial() {
  let  numM = parseInt(document.getElementById("numM").value);
  let  numJ = parseInt(document.getElementById("numJ").value);
  let  numN = parseInt(document.getElementById("numN").value);

  let resultadomodexponencial = Calcularmodexponencial(numM, numJ, numN);
  //console.log("resultado do calculo de mod exponencial:", resultadomodexponencial);

   document.getElementById("S").textContent = "O resultado de N é: " +  resultadomodexponencial;

}

function Calcularmodexponencial(M, J, N ){
  

return((M ** J) %  N );



}



function criptografar() {
  let mensagemUsuario = document.getElementById("mensagem").value;
  let numJ = parseInt(document.getElementById("numJ").value);
  let numN = parseInt(document.getElementById("numN").value);

  let asciiArray = mensagemParaAscii(mensagemUsuario);
  let resultadoModExponencial = calcularModExponencial(asciiArray, numJ, numN);

 console.log("Mensagem em ASCII: ", asciiArray);
 // console.log("Resultado do cálculo mod exponencial: ", resultadoModExponencial);
  console.log("resultado do calculo de mod exponencial:",  resultadoModExponencial);

  document.getElementById("R").textContent = "O resultado de total é: " +  resultadoModExponencial.join(" ");

}

function mensagemParaAscii(mensagem) {
  let asciiArray = [];
  for (let i = 0; i < mensagem.length; i++) {
    asciiArray.push(mensagem.charCodeAt(i));
  }
  return asciiArray;
}



function calcularModExponencial(M, J, N) {
  let resultadoModExponencial = [];
  for (let i = 0; i < M.length; i++) {
    let mensagem = M[i];
    let c = ((mensagem ** J) % N);
    resultadoModExponencial.push(c);
  }
  return resultadoModExponencial;
}






//3 funcoes descriptografando


//funcao numero/numero

function calcular() {
  let  numC = BigInt(document.getElementById("numC").value);
  let  numD = BigInt(document.getElementById("numD").value);
  let  nuMN = BigInt(document.getElementById("nuMN").value);

  let resultadomodexponencial = Calcularmodexponencial(numC, numD, nuMN);
  //console.log("resultado do calculo de mod exponencial:", resultadomodexponencial);

   document.getElementById("F").textContent = "O resultado de N é: " +  resultadomodexponencial;

}

function Calcularmodexponencial(C, D, N){
  

return((C ** D) %  N );



}


//direto

function ModExponencial() {
  // Obter valores do usuário
  let numerosC = document.getElementById("numerosC").value.split(" ").map(str => parseInt(str.trim()));
  let numD = parseInt(document.getElementById("numD").value);
  let nuMN = parseInt(document.getElementById("nuMN").value);

  // Validar entradas
 /* if (numerosC.some(isNaN) || isNaN(numD) || isNaN(numN)) {
    alert("Por favor, insira números válidos.");
    return;
  }
*/
  // Calcular o resultado para cada número em C
  let resultadoModExponencial = numerosC.map(c => BigInt(c) ** BigInt(numD) % BigInt(nuMN));

  // Exibir resultados
  console.log("Resultado do cálculo mod exponencial:", resultadoModExponencial);
  document.getElementById("U").textContent = "O resultado é: " + resultadoModExponencial.join(" ");
}




/*
function descriptografar() {
  let Mensagem = document.getElementById("Mensagem").value;
  let numD = parseInt(document.getElementById("numD").value);
  let nuMN = parseInt(document.getElementById("nuMN").value);

  // Mantenha os números como strings, evitando a conversão para inteiros
  let numeros = Mensagem.split(",");

  let resultadoModExponencial = calcularModExponencia(numeros, numD, nuMN);

  console.log("números em ASCII: ", numeros);
  console.log("Resultado do cálculo mod exponencial:", resultadoModExponencial);

  document.getElementById("U").textContent = "O resultado de total é: " + resultadoModExponencial.join("  ");
}

function calcularModExponencia(mensagem, D, N) {
  let resultadoModExponencial = [];
  for (let i = 0; i < mensagem.length; i++) {
    let m = mensagem[i];
    // Converta para inteiro antes de realizar o cálculo, se necessário
    let c = (parseInt(m) ** D) % N;
    resultadoModExponencial.push(c);
  }
  return resultadoModExponencial;
}





*/


























