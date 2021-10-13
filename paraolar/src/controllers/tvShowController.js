const tvShowJson = require("../models/series.json"); //importa a Json de series

const getAll = (request, response) => {

    response.status(200).send(
        {
            "TV Shows": tvShowJson
        }
    )
    
} //Cria a response e a lógica que vai ser chamada para mostrar todas as séries e armazena em uma variável. "TV Shows" é apenas o apelido que eu escolhi dar para o objeto que estou chamando.


module.exports = {
    getAll
}; //exporta as variáveis que contem as lógicas criadas aqui