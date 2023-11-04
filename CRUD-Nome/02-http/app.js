// Importar o módulo http
const http = require("http");

// Criar o servidor
http.createServer(function (req, res) {
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.write(
        "Testando o envio de mensagens através de um servidor web local na porta 1234"
    );
    res.end();
}).listen(1234);
