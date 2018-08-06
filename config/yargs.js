const descripcion = {
        demand: true,
        alias: 'd'
    }

const completado = {
    alias: 'c',
    demand: true,
    default: true
    }

const argv = require('yargs')
    .command('crear', 'Crear un elemento para hacer', { descripcion})
    .command('listar', 'Lista las tareas')
    .command('borrar', 'Comando elimina tareas.', { descripcion})
    .command('actualizar', 'Actualiza el estado de una tarea', {descripcion, completado})
    .help()
    .argv

module.exports = {
    argv
}