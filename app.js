const mongoose = require ('mongoose')
const url_bd = 'mongodb://localhost:27017/libreria'

//Conexion con db
mongoose.connect(url_bd)

//Comprobacion
.then(() => {
    console.log("To bien perro")
})
.catch((err)=>{
    console.log("No funciono")
}) 

//Esquemas db
const libreria = new mongoose.Schema({
    titulo:{
        type:String
    },
    autor:{
        type:String
    },
    anio:{
        type:String
    },
    genero:{
        type:String
    },
    editorial:{
        type:String
    },
    copias:{
        type:String
    },
    precio:{
        type:String
    }

})

//modelo db
const libros_modelo = new mongoose.model('libros', libreria)

//Crear tabla
libros_modelo.create({
    titulo: "La leyenda de las tierras raras",
    autor:"Yoel",
    anio:"2017",
    genero:"Ciencia ficcion",
    editorial:"Jose juan and friends",
    copias:"32",
    precio:"399"
})