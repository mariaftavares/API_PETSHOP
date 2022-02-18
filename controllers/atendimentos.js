/**CONTROLAR ROTAS  */
const Atendimento = require('../models/atendimentos')
module.exports = app =>{
    app.get('/atendimentos',(req,res)=>{
        const body = req.body
        Atendimento.procurar(body,res)
    })
     app.post('/atendimentos',(req,res)=> {
        const atendimento = req.body
        console.log(atendimento)
        Atendimento.adicionar(atendimento,res)
       })
    app.delete('/atendimentos',(req,res)=>{
        const body = req.body
        Atendimento.excluir(body,res)
    })
    app.put('/atendimentos',(req,res)=>{
        const body = req.body
        // console.log(body)
        Atendimento.atualizar(body,res)
    })

    


}
