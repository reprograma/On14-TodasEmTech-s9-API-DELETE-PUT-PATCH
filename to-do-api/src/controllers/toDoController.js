const tarefasJson = require("../models/tarefas.json")
const fs = require("fs")

//GET 
const getAll = (request, response)=>{
    response.status(200).send(tarefasJson)
}

//POST
const createTask = (request, response)=>{
    const bodyRequest = request.body

    const novaTarefa = {
        //id: numeros randomicos (aleatorios) + 32 letras 
        id: Math.random().toString(32).substr(2,9),
        dataInclusao: new Date(), //funcao pronta de data 
        descricao: bodyRequest.descricao,
        concluido: false,
        nome: bodyRequest.nome

    }

    //adiciona a tarefa nova na array de tarefas
    tarefasJson.push(novaTarefa)

//NÃO OBRIGATORIO
//escreve o arquivo de tarefas.json
//fs.writeFile(CAMINHO DO ARQUIVO, O QUE VAI ESCREVER, 'UTF8' )

    fs.writeFile("./src/models/tarefas.json", JSON.stringify(tarefasJson), 'utf8', function (err) {
        if (err) {
            return response.status(500).send({message: err});
        }
      });

    response.status(201).send(tarefasJson)
}

//DELETE
const deleteTask = (request, response)=>{
    //id que quero deletar
    const idRequest = request.params.id

    //pegando o indice(index) da tarefa q vai ser deletada
    const indiceTarefa = tarefasJson.findIndex(tarefa => tarefa.id == idRequest)

    //retira a tarefa da array de tarefas a partir do seu indice
    //ARRAY.SPLICE(INDICE, NUMERO DE ITENS DELETADOS, ITEM A SER ADICIONADO)
    //quando splice a gente so coloca o indice e 1, estamo retirando somente o tem
    tarefasJson.splice(indiceTarefa, 1)

    //NÃO OBRIGATORIO
    //escreve o arquivo de tarefas.json
    fs.writeFile("./src/models/tarefas.json", JSON.stringify(tarefasJson), 'utf8', function (err) {
        if (err) {
            return response.status(500).send({message: err});
        }
      });

    response.status(200).json([
        {
            "message": "tarefa deletada com sucesso",
            "deletada": idRequest,
            tarefasJson
        }
    ])
}

//PUT que aceita mais de uma atualização
//put = substituição  e patch = atualização
const updateQualquerCoisa = (request, response)=>{
    //guardar em variaveis o id e o body enviado no request
    const idRequest = request.params.id
    const bodyRequest = request.body

    //encontrar a tarefa que devera ser atualizada
    const tarefaEncontrada = tarefasJson.find(tarefa => tarefa.id == idRequest)
    
    //o id e a data Inclusão não podem ser modificados
    //estou garantindo que mesmo que ousuario mande algo nesses campos, nós não alteraremos
    
    //o id enviado, ou não, no request vai ser o id do item
    bodyRequest.id = idRequest
    //a dataInclusão enviado, ou não, no request vai ser a do item
    bodyRequest.dataInclusao = tarefaEncontrada.dataInclusao


    //OBJECT.KEYS(OBJETO) retorna uma lista(array) das chaves do objeto
    // o forEach esta percorrendo por essa array de chaves
    Object.keys(tarefaEncontrada).forEach((chave)=>{

        //SE o body não tiver uma das chaves
        //por exemplo: enviou um body só com "nome" e sem a descricao
        if(bodyRequest[chave] == undefined){
            //não altera a tarefa encontrada
            tarefaEncontrada[chave] = tarefaEncontrada[chave]
            
        //SENÃO atualizar o valor da chave do item
        }else{
            //por exemplo: tarefaEncontrada.Nome = bodyRequest.Nome
            tarefaEncontrada[chave] = bodyRequest[chave]
        }
    })


    
    response.status(200).json(
        [
            {
                "message": "tarefa atualizada",
                tarefaEncontrada
            }
        ]
        )

}

module.exports = {
    createTask,
    getAll,
    deleteTask,
    updateQualquerCoisa
}