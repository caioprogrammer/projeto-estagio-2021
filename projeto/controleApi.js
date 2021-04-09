/*function exibirLinhas() {
  linha(8)
 .then((data) => {
    alert('Carregou linhas')
    document.querySelector("#divLinhas").innerHTML = JSON.stringify(data)
  });
}*/

function exibirLinhas() {
  linha(8)
  .then((data) => {
    document.querySelector("#divLinhas").innerHTML = '<ul>' 
    data.forEach(linha => {
      document.querySelector("#divLinhas").innerHTML += '<li>' + 'Linha: ' + linha.tp + '</li>'
    });
    document.querySelector("#divLinhas").innerHTML += '</ul>'
    alert('Carregou linhas')
  });
} 