# Node App CRUD con JSON
CRUD JSON-NODEJS actividades desde la linea de comandos
##Descripcion del idioma
Permite CREAR, LEER, ACTUALIZAR Y ELIMINAR tareas en un JSON desde la linea de comandos de node

## Instalación
```
npm install
```
## Uso
```
//Crear una tarea nueva y se almacena en un JSON
node app crear -d "Mi nueva tarea"
//Lista las tareas guardadas
node app listar 
//Actualiza el estado de la tarea
node app actualizar -d "Mi nueva tarea" -c
//Borra una tarea
node app borrar -d "Mi nueva tarea"
```

## Créditos
- [@MrInternauta](https://twitter.com/mrinternauta)

## Licencia
[MIT](https://opensource.org/licenses/MIT)
