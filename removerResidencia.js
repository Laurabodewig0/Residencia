let residencia = require('./residencia');

function removerResidencia(index) {
  residencia.splice(index, 1);
}

module.exports = removerResidencia;