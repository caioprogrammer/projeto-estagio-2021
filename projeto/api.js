// Metodo para autenticar na API
function login(token) {
  // Retorna a promise do método que pode ser tratado na chamada
  return fetch(`https://aiko-olhovivo-proxy.aikodigital.io/Login/Autenticar?token=${token}`, {
    method: 'post'
  })
  .then((response) => response.json())
}

// Consulta linha de ônibus
// Passa o parâmetro no método
function linha(linha) {
  return fetch(`https://aiko-olhovivo-proxy.aikodigital.io/Linha/Buscar?termosBusca=${linha}`, {
    method: 'get'
  })
  .then((response) => response.json())
}

// Consulta posição dos veículos
function posicao() {
  return fetch(`https://aiko-olhovivo-proxy.aikodigital.io/Posicao`, {
    method: 'get'
  })
  .then((response) => response.json())
}

// Consulta posição dos veículos
function posicaoLinha(linha) {
  return fetch(`https://aiko-olhovivo-proxy.aikodigital.io/Posicao/Linha?codigoLinha=${linha}`, {
    method: 'get'
  })
  .then((response) => response.json())
}

// Consulta paradas por termo
function paradasPorTermo(termo) {
  return fetch(`https://aiko-olhovivo-proxy.aikodigital.io/Parada/Buscar?termosBusca=${termo}`, {
    method: 'get'
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Paradas do termo', data);
  });
}

// Consulta paradas por linha
function paradasPorLinha(linha) {
  return fetch(`https://aiko-olhovivo-proxy.aikodigital.io/Parada/BuscarParadasPorLinha?codigoLinha=${linha}`, {
    method: 'get'
  })
  .then((response) => response.json())
}

login('2ee9b64653025a14f847e5c3250428d283ab1f67a0b33976f2d4cb50bd7e7eaf').then(data => {
  console.log(data)
  if (data.toString() == 'true')
    console.log('Autenticação realizada')
})