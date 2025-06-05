const XLSX = require('xlsx');

const dados = [
  { Nome: 'Alice', Idade: 30, Email: 'alice@example.com' },
  { Nome: 'Bob', Idade: 25, Email: 'bob@example.com' },
  { Nome: 'Carol', Idade: 27, Email: 'carol@example.com' },
];

const planilha = XLSX.utils.json_to_sheet(dados);
const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, planilha, 'Dados');
XLSX.writeFile(workbook, 'dados.xlsx');
console.log('Arquivo "dados.xlsx" criado com sucesso.');
