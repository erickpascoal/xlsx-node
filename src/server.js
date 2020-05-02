const xlsx = require('xlsx');


const wb = xlsx.readFile('dragonballz.xlsx');
const ws = wb.Sheets['Plan1'];  //Plan 1 = é a primeira aba do arquivo, colocar o nome da aba q deseja pegar os dados
const personagens = xlsx.utils.sheet_to_json(ws);  // transforma XLSX para JSON
console.log(personagens);


const apenasPersonagensFortes = personagens.filter(p => p.Força > 8000); // filtrando personagens com nivel de poder com + 8 mil

console.log(apenasPersonagensFortes);

const newWB = xlsx.utils.book_new();  //  instanciando novo arquivo excel
const newWS = xlsx.utils.json_to_sheet(apenasPersonagensFortes); //criando a primeira aba
xlsx.utils.book_append_sheet(newWB, newWS, "DBZ");   // montando arquivo e dando nome à primeira aba

xlsx.writeFile(newWB, "Apenas Personagens fortes.xlsx");   // gerando arquivo

