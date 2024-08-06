let residencia = require('./residencia');

function listarResidencia() {
  residencia.forEach((residencia, index) => {
    console.log(`${index+1} Residencia: ${residencia.residencia}, Bairro: ${residencia.bairro}, Morador: ${residencia.morador}`);
  });
}

module.exports = listarResidencia;