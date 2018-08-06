const argv = require('./config/yargs').argv
const porhacer = require('./por-hacer/por-hacer')
const colors = require('colors')
let comando = argv._[0]
switch(comando){
    case 'crear':
        console.log('Crear archivo')
        console.log(porhacer.crear(argv.descripcion))
    break
    case 'listar':
        console.log('...::: Tareas :::...'.red)
        for (let tarea of porhacer.getlistado()){
            console.log('==========='.green)
            console.log("Tarea: " + tarea.descripcion)
            console.log('Estado: ' +tarea.completado)
            console.log('==========='.green)
        }
    break
    case 'actualizar':
        porhacer.actualizar(argv.descripcion)
        .then((res)=> console.log(res))
        .catch((err)=>console.error(err))
    break
    case 'borrar':
        console.log(porhacer.borrar(argv.descripcion))
    break
    default:
    console.log('Comando no reconocido')
}