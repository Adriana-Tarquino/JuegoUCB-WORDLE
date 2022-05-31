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
const url = "mongodb://test/palabras";

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
// crear("manzana","frutas");
// actualizar("cantar", "jugar", "verbos");
// eliminar("caminar");

//una palabra aletoria de una categoria(nombreCategoria) => return una palabra de la categoria
const aleatorioPalabras = async (categoria) => {
  const palabras = await palabraModel.find(
    { categoria: categoria },
    { _id: 0, palabra: 1 }
  );
  const lp = [];
  for (let i = 0; i < palabras.length; i++) {
    // console.log(palabras[i].palabra);
    lp.push(palabras[i].palabra);
  }
  console.log(lp);
  var rand = Math.floor(Math.random() * lp.length);
  var resp = lp[rand];
  // console.log(res)
  return resp;
};

// Prueba de palabra aleatoria
// aleatorioPalabras("verbos").then((v) => {
//   console.log(v);
// });

//una palabra tiene que estar en la lista de palabras (palabra) => true of false
const verificarPalabra = async (palabraVereficar) => {
  const palabras = await palabraModel.find(
    { },
    { _id: 0, palabra: 1 }
  );
  let resp = false;
  for (let i = 0; i < palabras.length; i++) {
    // console.log(palabras[i].palabra);
    if (palabras[i].palabra === palabraVereficar) {
      resp = true;
    }
  }
  return resp;
};

// Prueba de verificar si la palabra esta en la base de datos 
// verificarPalabra("macaco").then((v) => {
//   console.log(v);
// });
