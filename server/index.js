
const express = require('express');
const port=3000;
// aruivo de conexão 


const routes = require('./src/routes/routes');



const app = express();

// view engine setup


// app.use(methodOverride("_method"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

//criar rota
// app.get('/', (req,res)=>{
//   return res.send("importação concluida")
// });

app.use("/",routes)


app.listen(port, () => {
  console.log("Estamos rodando em: http://localhost:" + port );
});
