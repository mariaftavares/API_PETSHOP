/*SUBIR SERVIDOR NO AR */
const customExpress = require('./config/customExpress')
const app = customExpress()
const conexao = require('./infra/conexao')

conexao.connect(
    error=>{
        if(error){
            console.log(error)
        }
        else {
            app.listen(3000,()=> 
            console.log("Servidor na porta 3000")
            )
            console.log("Conectado ao database com sucesso!")
        
        }
    }
        
    
)

