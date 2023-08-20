const { response, request } = require('express')

const usuariosGet = (req = request,res = response)=>{
    const {q,nombre = 'No name',apiKey, page = 1, limit} = req.query
    res.json({
        msg: 'get Api - controlador',
        q,
        nombre,
        apiKey,
        page,
        limit
    })
}

const usuariosPost =(req,res)=>{

    const {nombre,edad} = req.body;


    res.status(200).json({
        msg: 'post Api - Controlador',
        nombre,
        edad
    })
}

const usuariosPut = (req,res)=>{
    const {id} = req.params
    if(!id) { 
        res.status(400).json({
            msg: 'ingrese un id - Controlador',
        })
        return
    }

    res.status(200).json({
        msg: 'put Api - Controlador',
        id
    })
}

const usuariosPatch =(req,res)=>{
    res.json({
        msg:'patch Api - Controlador'
    })
}

const usuariosDelete = (req,res)=>{
    res.json({
        msg: 'delete Api - Controlador'
    })
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}