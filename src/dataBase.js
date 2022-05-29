// Conexion a la base de datos
const mongoose = require("mongoose");

// conexion en la nube
// const username = 'fabio';
// const password = '1001';
// const db = 'proyectoIngSoft';
// const url = `mongodb+srv://${username}:${password};@cluster0.qu7zn.mongodb.net/${db}?retryWrites=true&w=majority`;

// mongoose.connect(url)
//     .then(() => console.log('Se conecto la base de datos'))
//     .catch(err => console.log("hubo un error: " + err))

// coenxion local
const url = "mongodb://localhost/ingSoft";

mongoose
  .connect(url)
  .then(() => console.log("Se conecto la base de datos"))
  .catch((err) => console.log("hubo un error: " + err));

const palabraSchema = mongoose.Schema(
  {
    palabra: String,
    categoria: String,
  },
  { versionKey: false }
);

const palabraModel = mongoose.model("palabras", palabraSchema);

// mostrar
const mostrar = async () => {
  const palabra = await palabraModel.find();
  console.log(palabra);
};

// Crear
const crear = async (newPalabra, newCategoria) => {
  const palabra = new palabraModel({
    palabra: newPalabra,
    categoria: newCategoria,
  });
  const resultado = await palabra.save();
  console.log(resultado);
};

// actualizar
const actualizar = async (actualPalabra, newPalabra, newCategoria) => {
  const palabra = await palabraModel.updateOne(
    { palabra: actualPalabra },
    {
      $set: {
        palabra: newPalabra,
        categoria: newCategoria,
      },
    }
  );
  console.log(palabra);
};

// Eliminar
const eliminar = async (actualPalabra) => {
  const palabra = await palabraModel.deleteOne({ palabra: actualPalabra });
  console.log(palabra);
};

// mostrar();
// crear();
// actualizar("cantar", "jugar", "verbos");
// eliminar("caminar");

//una palabra aletoria de una categoria(nombreCategoria) => return una palabra de la categoria 
//una palabra tiene que estar en la lista de palabras (palabra) => true of false 