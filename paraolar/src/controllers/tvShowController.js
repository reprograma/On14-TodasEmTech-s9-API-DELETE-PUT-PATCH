const tvShowJson = require("../models/series.json"); //importa a Json de series

//[GET] /series
//[GET] /series{id}
//[GET] /series{titulo}
//[GET] /series{genero}
const getAll = (request, response) => {
    
    const { id, title, genre } = request.query;

    let found = tvShowJson;
    
    if (id) {

        found = found.find (
            
            tvShow => {
               
                return tvShow.id == id
            }
        );
    }
    
    if (title) {

        found = found.find (
           
            tvShow => {
                
                return tvShow.title == title
            }
        );
    }
    
    if (genre) {

        found = found.filter (
            
            tvShow => {
                
                return tvShow.genre.toString().includes(genre)

            }
        );
    }

    response.status(200).send(
        {
            "TV Shows": found
        }
    );
        
} //Cria a response e a lógica que vai ser chamada para mostrar todas as séries e armazena em uma variável. "TV Shows" é apenas o apelido que eu escolhi dar para o objeto que estou chamando.

//[POST]/series/criar
const postNewTvShow = (request, response) => {
    const bodyRequest = request.body;

    let newTvShow = {
        
        id: (tvShowJson.length) + 1,
        title: bodyRequest.title,         
        totalSeasons: bodyRequest.totalSeasons,
        genre: bodyRequest.genre,
        writers: bodyRequest.writers,
        poster: bodyRequest.poster,
        actors: bodyRequest.actors,
        ratings: bodyRequest.ratings
       
    };
    
    tvShowJson.push(newTvShow);

    response.status(201).json(
        [
            {
                
                "Message": `A série ${newTvShow.title} foi cadastrada com sucesso.`, newTvShow
            
            }
        ]
    );

}


//[PUT]/series/update/{id}
const putUpdateById = (request, response) => {
    
    const idRequest = request.params.id; //id mandado na request(url)
    const bodyRequest = request.body; // informação enviada no body

    const tvShowFound = tvShowJson.find(tvShow => tvShow.id == idRequest); // encontrando o filme que tem o id enviado na request
    
    bodyRequest.id = idRequest; 

    Object.keys(tvShowFound).forEach (
        (chave) => {
        
            bodyRequest[chave] == null ? tvShowFound[chave] = tvShowFound[chave] : tvShowFound[chave] = bodyRequest[chave]

        }
    );

    response.status(200).json(
        [
           {
               
            "Message": `A série ${tvShowFound.title} foi atualizada com sucesso.`, tvShowJson

           } 
        ]
    );

}

//[PATCH]/series/updateTitle?{id}
const patchUpdateTitle = (request, response) => {
    
    const idRequest = request.query.id; //preciso mandar o id para identificar quem eu quro modificar e mandar no body o que eu quero modificar
    let newTitle = request.body.title; // vou mandar no body o que quero modificar

    //agora, preciso encontrar o filme.

    tvShowFound = tvShowJson.find(tvShow => tvShow.id == idRequest);

    tvShowFound.title = newTitle;

    response.status(200).json(
        [
            {
                "Message": "Série atualizada com sucesso.", tvShowFound
            }
        ]
    );
}

//[PATCH]/series/update/{id}
const patchUpdateAnything = (request, response) => {

    const idRequest = request.params.id;
    const bodyRequest = request.body;

    const tvShowFound = tvShowJson.find(tvShow => tvShow.id == idRequest);
    
    bodyRequest.id = idRequest;

    Object.keys(tvShowFound).forEach(
        
        (key) => bodyRequest [key] == undefined ? (
            
            tvShowFound[key] = tvShowFound[key]

         ) : (
           
            tvShowFound[key] = bodyRequest[key]
         )
    );

    response.status(200).json(
        [
            {
                "Message": `A série ${tvShowFound.title} foi atualizada com sucesso`, tvShowJson
            }
        ]
    );
}


//[DELETE]/series/deletar/{id}

const deleteTvShow = (request, response) => {
    const idRequest = request.params.id;

    const indexTvShow = tvShowJson.findIndex(tvShow => tvShow.id == idRequest); //o find vai buscar apenas o index que eu quero. Ele não retorn o objeto, retorna apenas o index do objeto.

    tvShowJson.splice(indexTvShow, 1);

    response.status(200).json(
        [
            {

                "Message": `O série de ID ${indexTvShow + 1} foi deletada com sucesso.`, tvShowJson

            }
        ]
    );
}


module.exports = {
    getAll,
    postNewTvShow,
    putUpdateById,
    patchUpdateTitle,
    patchUpdateAnything,
    deleteTvShow
}; //exporta as variáveis que contem as lógicas criadas aqui