// Importa o módulo fs (File System) para interagir com arquivos
const fs = require('fs')
// Importa o módulo http para criar um servidor http
const http = require('http')

// Lê o arquivo data.json e o converte para um objeto JavaScript
const data = JSON.parse(fs.readFileSync(`${__dirname}/data.json`, 'utf-8'))

// Cria um servidor HTTP para atender as requisições do cliente
const server = http.createServer((req, res) => {
  // Obtém o caminho da requisição, que é a parte da URL após o hostname e porta
  const pathname = req.url
  
  // Verifica o caminho da requisição
  switch (pathname) {
    // Se o caminho da URL for "/api", executa o seguinte bloco de código
    case '/api':
    res.writeHead(200, {
      'Content-Type': 'application/json'
    })
    // Responde o cliente enviando os dados do arquivo data.json no formato JSON
    res.end(JSON.stringify(data))
    break
  }
})

const port = 8000
const hostname = '127.0.0.1'
/** 
* Inicia o servidor HTTP para atender as requisições do cliente.
* @param {number} port - Porta em que o servidor vai atender as requisições do cliente.
* @param {string} hostname - Endereço de IP que vai atender as requisições do cliente.
* @param {Function} callback - Função que será executada quando o servidor começar a escutar.
*/
server.listen(port, hostname, () => {
  console.log(`Servidor está aguardando conexões em http://${hostname}:${port}`)
})