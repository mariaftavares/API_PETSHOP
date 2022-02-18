const res = require('express/lib/response')
const conexao = require('../infra/conexao')
class Atendimento{
    adicionar(atendimento,res){
        const sql = 'INSERT INTO atendimento SET ?'
         conexao.query(sql,atendimento,(erro,resposta)=>{
            if (erro){
                console.log(erro)
            }
            else {
                res.json(atendimento)
            }
        })

    }
    excluir(id,res){
        const sql = 'DELETE FROM atendimento WHERE ?'
        conexao.query(sql,id,(erro,resposta)=>{
            if (erro){
                console.log(erro)
            }
            else {
                res.json(resposta)
            }
        })
    }

    procurar(id,res){
        const sql = 'SELECT * FROM atendimento WHERE ?'
        conexao.query(sql,id,(erro,resposta)=>{
            if (erro){
                console.log(erro)
            }
            else {
                res.json(resposta)
            }
        })
    }

    atualizar(id,res){
        const sql = 'UPDATE atendimento SET ? WHERE ID = ?'
        conexao.query(sql,[id, id.ID],(erro,resposta)=>{
            if (erro){
                console.log(erro)
            }
            else {
                res.json(resposta)
            }
        })
    }
}
module.exports = new Atendimento