require('dotenv').config()
const express = require('express')
const cors = require('cors')

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT || 3000
        this.usuariosPath = '/api/usuarios'
        //Middlewares
        this.middlewares()
        //Rutas
        this.router()
    }

    middlewares(){
        this.app.use(cors())
        //Lectura y parseo del body
        this.app.use(express.json())
        //Carpeta publica
        this.app.use(express.static('public'))
    }

    router(){
        this.app.use(this.usuariosPath,require('../routes/usuarios'))
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor corriendo en el puerto ',this.port)
        })
    }
}

module.exports = Server
