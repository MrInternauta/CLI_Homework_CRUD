const fs = require('fs')
let listadoporhacer = []
const guardarDB = () =>{
        let data = JSON.stringify(listadoporhacer)
        fs.writeFile('db/data.json', data, (err) => {
            if (err) {
             throw new Error (err)
            }
            return ('Guardado')
        })    
}
const leerDB = ()=>{
    try{
        listadoporhacer = require('../db/data.json')
    }catch(err){
        listadoporhacer = []
    }
    
}

let getlistado = ()=>{
    leerDB()
    return listadoporhacer
}

let crear = (descripcion)=>{
    leerDB()
    let porhacer = {
        descripcion,
        completado: false
    }
    listadoporhacer.push(porhacer)
    guardarDB()
    return porhacer
}

let actualizar = (descripcion)=>{
    return new Promise((resolve, reject)=>{
        leerDB()
        let index = listadoporhacer.findIndex((tarea)=> tarea.descripcion === descripcion)
        if(index<0){
            reject('La tarea no existe')
        }
        if (index >= 0) {
            if(listadoporhacer[index]){
                 reject('La tarea ya habia sido completada')
            }
            listadoporhacer[index].completado = true
            guardarDB()
            resolve('La tarea con descripcion: ' + descripcion+'. LISTA')

        }   
    })
}

let borrar = (descripcion) =>{
    leerDB()
    let index = listadoporhacer.findIndex((tarea) => tarea.descripcion === descripcion)
    if (index < 0) return('La tarea no existe')
    
    if (index >= 0) {
        listadoporhacer.splice(index,1)
        guardarDB()
        return ('La tarea con descripcion: ' + descripcion + ' Fue eliminada')
    } 
}

module.exports = {
    crear,
    getlistado,
    actualizar,
    borrar
}