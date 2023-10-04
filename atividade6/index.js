const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({extended: true}));

app.get("/", function (req, res) 
{
    res.render("index.html");
});

app.post("/dados", function (req, res)
 {
   let formulario = {
        nome: req.body.nome,
        endereco: req.body.endereco,
        telefone: req.body.telefone,
        data: req.body.data
    };

    res.render("dados.html", {formulario});

});

const PORT = 8080;

app.listen(PORT, function () {
    console.log("Rodando na porta " + PORT);
});