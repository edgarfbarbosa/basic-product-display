// Importa o módulo fs (File System) para interagir com arquivos
const fs = require('fs')
// Importa o módulo http para criar um servidor http
const http = require('http')

// Lê o arquivo data.json e o converte para um objeto JavaScript
const data = JSON.parse(fs.readFileSync(`${__dirname}/data.json`, 'utf-8'))

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  })
  res.end(JSON.stringify(data))
})

const port = 8000
const hostname = '127.0.0.1'
/** 
* Inicia o servidor HTTP para atender as requisições.
* @param {number} port - Porta em que o servidor vai atender as requisições.
* @param {string} hostname - Endereço de IP que vai atender as requisições.
* @param {Function} callback - Função que será executada quando o servidor começar a escutar.
*/
server.listen(port, hostname, () => {
  console.log(`Servidor está aguardando conexões em http://${hostname}:${port}`)
})