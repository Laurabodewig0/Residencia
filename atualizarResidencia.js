let residencia = require('./residencia');

function atualizarResidencia(index, novoResidencia) {
  residencia[index] = novoResidencia;
}

module.exports = atualizarResidencia;