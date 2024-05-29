

// function showSection(sectionId) {
//     document.querySelectorAll('.section').forEach(section => {
//         section.classList.add('hidden');
//     });
//     document.getElementById(sectionId).classList.remove('hidden');
// }

// // Funções RSA
// function generateRSAKeys() {
//     const p = parseInt(document.getElementById('pValue').value);
//     const q = parseInt(document.getElementById('qValue').value);
//     const e = parseInt(document.getElementById('eValue').value);

//     if (!p || !q || !e) {
//         alert('Por favor, preencha todos os campos para P, Q e e.');
//         return;
//     }

//     const n = p * q;
//     const g = (p - 1) * (q - 1);

//     // Verifica se 'e' é coprimo com 'g'
//     if (gcd(e, g) !== 1) {
//         alert('e deve ser coprimo com G.');
//         return;
//     }

//     // Calcula 'd'
//     const d = modInverse(e, g);

//     document.getElementById('rsaPublicKey').value = `Public Key: (e=${e}, n=${n})`;
//     document.getElementById('rsaPrivateKey').value = `Private Key: (d=${d}, n=${n})`;
// }

// function encryptRSA() {
//     const message = document.getElementById('rsaMessage').value;
//     const e = parseInt(document.getElementById('rsaPublicKey').value.split('=')[1].split(',')[0]);
//     const n = parseInt(document.getElementById('rsaPublicKey').value.split('=')[2].split(')')[0]);

//     if (!message || !e || !n) {
//         alert('Por favor, preencha a mensagem e gere as chaves.');
//         return;
//     }

//     const asciiMessage = message.split('').map(char => char.charCodeAt(0));
//     const encryptedMessage = asciiMessage.map(m => modPow(m, e, n));
//     document.getElementById('rsaEncryptedMessage').innerText = 'Mensagem Criptografada: ' + encryptedMessage.join(' ');
// }

// function decryptRSA() {
//     const encryptedMessage = document.getElementById('rsaEncryptedMessage').innerText.replace('Mensagem Criptografada: ', '').split(' ');
//     const d = parseInt(document.getElementById('rsaPrivateKey').value.split('=')[1].split(',')[0]);
//     const n = parseInt(document.getElementById('rsaPrivateKey').value.split('=')[2].split(')')[0]);

//     if (!encryptedMessage || !d || !n) {
//         alert('Por favor, preencha a mensagem criptografada e gere as chaves.');
//         return;
//     }

//     const decryptedMessage = encryptedMessage.map(c => String.fromCharCode(modPow(parseInt(c), d, n)));
//     document.getElementById('rsaDecryptedMessage').innerText = 'Mensagem Descriptografada: ' + decryptedMessage.join('');
// }

// // Funções AES
// function encryptAES() {
//     const message = document.getElementById('aesMessage').value;
//     const key = document.getElementById('aesKey').value;

//     if (!message || !key) {
//         alert('Por favor, preencha a mensagem e a chave.');
//         return;
//     }

//     // Fake encryption for demonstration
//     const encryptedMessage = btoa(message + key);
//     document.getElementById('aesEncryptedMessage').innerText = 'Mensagem Criptografada: ' + encryptedMessage;
// }

// function decryptAES() {
//     const encryptedMessage = document.getElementById('aesEncryptedMessage').innerText.replace('Mensagem Criptografada: ', '');
//     const key = document.getElementById('aesKey').value;

//     if (!encryptedMessage || !key) {
//         alert('Por favor, preencha a mensagem criptografada e a chave.');
//         return;
//     }

//     // Fake decryption for demonstration
//     const decryptedMessage = atob(encryptedMessage).replace(key, '');
//     document.getElementById('aesDecryptedMessage').innerText = 'Mensagem Descriptografada: ' + decryptedMessage;
// }

// // Helper functions
// function gcd(a, b) {
//     while (b !== 0) {
//         [a, b] = [b, a % b];
//     }
//     return a;
// }

// function modInverse(e, phi) {
//     let [m0, x0, x1] = [phi, 0, 1];
//     if (phi === 1) return 0;
//     while (e > 1) {
//         const q = Math.floor(e / phi);
//         [e, phi] = [phi, e % phi];
//         [x0, x1] = [x1 - q * x0, x0];
//     }
//     if (x1 < 0) x1 += m0;
//     return x1;
// }

// function modPow(base, exp, mod) {
//     if (mod === 1) return 0;
//     let result = 1;
//     base = base % mod;
//     while (exp > 0) {
//         if (exp % 2 === 1) result = (result * base) % mod;
//         exp = exp >> 1;
//         base = (base * base) % mod;
//     }
//     return result;
// }




// ------------------Funçoes do outro documento  -------------------


function realizarCalculoN() {
  const p = parseInt(document.getElementById('numP').value);
  const q = parseInt(document.getElementById('numQ').value);
  const n = p * q;
  document.getElementById('N').innerText = 'N = ' + n;
}

function realizarCalculoG() {
  const p = parseInt(document.getElementById('numP').value);
  const q = parseInt(document.getElementById('numQ').value);
  const g = (p - 1) * (q - 1);
  document.getElementById('G').innerText = 'G = ' + g;
}

function calcularInverso() {
  const j = parseInt(document.getElementById('J').value);
  const g = parseInt(document.getElementById('vG').value);
  let d = 0;
  for (let i = 1; i < g; i++) {
      if ((j * i) % g === 1) {
          d = i;
          break;
      }
  }
  document.getElementById('resultado').innerText = 'D = ' + d;
}

function converterParaASCII() {
  const mensagem = document.getElementById('mensagem').value;
  const asciiValues = [];
  for (let i = 0; i < mensagem.length; i++) {
      asciiValues.push(mensagem.charCodeAt(i));
  }
  document.getElementById('tabelaASCII').innerText = asciiValues.join(' ');
}

function modExp(base, exp, mod) {
  let result = 1;
  base = base % mod;
  while (exp > 0) {
      if (exp % 2 === 1) {
          result = (result * base) % mod;
      }
      exp = Math.floor(exp / 2);
      base = (base * base) % mod;
  }
  return result;
}

function criptografarMensagem() {
  const asciiString = document.getElementById('tabelaASCII').innerText;
  const j = parseInt(document.getElementById('numJ').value);
  const n = parseInt(document.getElementById('numN2').value);
  const asciiValues = asciiString.split(' ').map(Number);
  const criptografados = asciiValues.map(value => modExp(value, j, n));
  document.getElementById('S').innerText = criptografados.join(' ');
}

function descriptografarMensagem() {
  const criptografadosString = document.getElementById('mensagemCriptografada').value;
  const d = parseInt(document.getElementById('numD').value);
  const n = parseInt(document.getElementById('numN3').value);
  const criptografadosValues = criptografadosString.split(' ').map(Number);
  const descriptografados = criptografadosValues.map(value => modExp(value, d, n));
  const mensagem = descriptografados.map(value => String.fromCharCode(value)).join('');
  document.getElementById('F').innerText = mensagem;
}


