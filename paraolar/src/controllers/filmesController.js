const moviesJson = require("../models/filmes.json"); //importa a Json de filmes

//[GET] /filmes

const getAll = (request, response) => {
    
    response.status(200).send(
        [
            {
                "Movies": moviesJson
            }
        ]
    );

} //Cria a lógica que vai ser chamada para mostrar todos os filmes e armazena em uma variável. "Movies" é apenas o apelido que eu escolhi dar para o objeto que estou chamando.


//[GET] /filmes/buscar/{id}
const getById = (request, response) => {
    
    const idRequest = request.params.id;
    
    let idCaught = moviesJson.find(
        movie => movie.id == idRequest
        );
        
        response.status(200).send(idCaught);
        
} //request.params: a pesquisa vai direto na rota

//[GET] /filmes/buscar?{titulo}
const getByTitle = (request, response) => {
    
    let titleRequest = request.query.Title;
    
    let titleCaught = moviesJson.filter(
        movie => movie.Title.includes(titleRequest)
    );
    
    response.status(200).send(titleCaught);
    
}

//[GET] /filmes/filtrar?{genero}
const getByGenre = (request, response) => {
    
    let genreRequest = request.query.Genre.toLowerCase();
    
    let genreCaught = moviesJson.filter(
        movie => movie.Genre.toLowerCase().includes(genreRequest)
        ); //tenho que chamar o array para poder percorre-lo ex.: moviesJson.filter()
        
    response.status(200).send(genreCaught);
    
}

//[POST]/filmes/criar
const postNewMovie = (request, response) => {
    const bodyRequest = request.body;

    let newMovie = {
        
        id: (moviesJson.length) + 1,
        Title: bodyRequest.Title, 
        Year: bodyRequest.Year, 
        Rated: bodyRequest.Rated, 
        Released: bodyRequest.Released, 
        Runtime: bodyRequest.Runtime, 
        Genre: bodyRequest.Genre, 
        Director: bodyRequest.Director,
        Writer: bodyRequest.Writer, 
        Actors: bodyRequest.Actors, 
        Plot: bodyRequest.Plot, 
        Language: bodyRequest.Language, 
        Country: bodyRequest.Country, 
        Awards: bodyRequest.Awards
       
    };
    
    moviesJson.push(newMovie);

    response.status(201).json(
        [
            {
                
                "Message": `O Filme ${newMovie.Title} foi cadastrado com sucesso.`, newMovie
            
            }
        ]
    );

}

//[PUT]/filmes/update/{id} > Possibilitar atualizar qualquer coisa, menos o id
const putUpdateById = (request, response) => {
    
    const idRequest = request.params.id; //id mandado na request(url)
    const bodyRequest = request.body; // informação enviada no body

    const movieFound = moviesJson.find(movie => movie.id == idRequest); // encontrando o filme que tem o id enviado na request
    
    //Não modificar o id
    bodyRequest.id = idRequest; //Não importa o que o usuário mandar no bodyRequest, sempr vou substitui pelo que ta vindo na requisição, no params. Não importa o que o usário mandar, o que vai ser cadastrado nessa linha é o que veio na request

    // Procura a chave na minha lista de filme que é igual a chave enviada na request. 
    
    Object.keys(movieFound).forEach (
        
        (key) => {
        
            bodyRequest[key] == null ? movieFound[key] = movieFound[key] : movieFound[key] = bodyRequest[key]

        }
    );
    
    response.status(200).json(
        [
           {
               
            "Message": `O filme ${movieFound.Title} foi atualizado com sucesso.`, moviesJson

           } 
        ]
    );

}

//[PATCH]/filmes/updateTitle?{id}
const patchUpdateTitleById = (request, response) => {
    
    const idRequest = request.query.id;
    
    let newTitle = request.body.Title;
      

    movieFound = moviesJson.find(movie => movie.id == idRequest) //filme encontrado. uso o find.

    movieFound.Title = newTitle //substituindo o titulo antigo do filme pelo novo enviado na request. Uso movieFound.Title para dizer qual campo vai ser substituido e substituo pelo novo TITULO enviado na request

    response.status(200).send(
        [
            {
               
                "Message": "Filme atualizado com sucesso.", moviesJson

            }
        ]
    ) //enviando a response
    
}

//[PATCH]/filmes/update/{id}
const patchUpdateAnything = (request, response) => {

    const idRequest = request.params.id;
    const bodyRequest = request.body;

    const movieFound = moviesJson.find(tvShow => tvShow.id == idRequest);
    
    bodyRequest.id = idRequest;

    Object.keys(movieFound).forEach(
        
        (key) => {
            
            bodyRequest [key] == undefined ? (
            
                movieFound[key] = movieFound[key]

            ) : (
            
                movieFound[key] = bodyRequest[key]
            )
        }
    );

    response.status(200).json(
        [
            {
                "Message": `A série ${movieFound.Title} foi atualizado com sucesso`, moviesJson
            }
        ]
    );
}

//[DELETE]/filmes/deletar/{id}
const deleteMovie = (request, response) => {
    const idRequest = request.params.id;

    const indexMovie = moviesJson.findIndex(movie => movie.id == idRequest); //o find vai buscar apenas o index que eu quero. Ele não retorn o objeto, retorna apenas o index do objeto.

    moviesJson.splice(indexMovie, 1);

    response.status(200).json(
        [
            {

                "Message": `O filme de ID ${indexMovie + 1} foi deletado com sucesso.`, moviesJson

            }
        ]
    )
}

module.exports = {
            
    getAll,
    getById,
    getByTitle,
    getByGenre,
    postNewMovie,
    patchUpdateTitleById,
    patchUpdateAnything,
    putUpdateById,
    deleteMovie
    
}; //exporta as variáveis que contem as lógicas criadas aqui

//helper