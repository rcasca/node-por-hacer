const descrpcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default:true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', descrpcion)    
    .command('actualizar', 'Actualizar el estado completado de una tarea', {descrpcion, completado})
    .command('borrar', 'Borrar una tarea', descrpcion)
    .help()
    .argv;


module.exports = {
    argv
}