const prompt = require('prompt-sync')()

module.exports = [
    { residencia: 'Karina', bairro: 'SC', moradores: 'alexandre' },
    { residencia: 'Luiz', bairro: 'HA', moradores: 'felipe' },
    { residencia: 'Guilherme', bairro: 'JC',  moradores: 'joao' }
  ];

const listarResidencia = require('./listarResidencia');
const adicionarResidencia = require('./adicionarResidencia');
const atualizarResidencia = require('./atualizarResidencia');
const removerResidencia = require('./removerResidencia');


 let residencia = []

 function mainMenu() {
    console.log(`
    1. Listar residencia
    2. Adicionar residencia
    3. Atualizar residencia 
    4. Remover residencia
    5. Sair
    `);
 }

 const opcao = prompt('Escolha uma opção: ');
 let index;

 switch (opcao) {
   case '1':
       listarResidencia();
       mainMenu();
       break;
   case '2':
       const residencia = prompt('Residencia: ');
       const bairro = prompt('Bairro: ');
       const moradores = prompt('Moradores: ');
       adicionarResidencia({ residencia, bairro, moradores });
       console.log('Residencia adicionado com sucesso!');
       mainMenu();
       break;
   case '3':
       listarResidencia();
       index = parseInt(prompt('Número de residencias atualizado: ')) - 1;
       const novoResidencia = prompt('Novo : residencia');
       const novoBairro = prompt('Novo bairro: ');
       const novoMorador = prompt('Novo morador: ');
       atualizarResidencia(index, { nome: novoResidencia, bairro: novoBairro, morador: novoMorador });
       console.log('Residencia atualizada com sucesso!');
       mainMenu();
       break;
   case '4':
       listarResidencia();
       index = parseInt(prompt('Número do contato a remover: ')) - 1;
       removerResidencia(index);
       console.log('Residencia removida com sucesso!');
       mainMenu();
       break;
   case '5':
       break;
   default:
       console.log('Opção inválida!');
       mainMenu();
   }


mainMenu();