const moviesJson = require("../models/filmes.json"); //importa a Json de filmes

const getAll = (request, response) => {
    
    response.status(200).send(
        [
            {
                "Movies": moviesJson
            }
        ]
    );

} //Cria a lógica que vai ser chamada para mostrar todos os filmes e armazena em uma variável. "Movies" é apenas o apelido que eu escolhi dar para o objeto que estou chamando.

module.exports ={
    getAll
} //exporta as variáveis que contem as lógicas criadas aqui