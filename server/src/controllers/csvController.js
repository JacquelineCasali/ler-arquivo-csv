// const Sequelize = require("sequelize");
// const configDB = require("../config/database");
// const db = new Sequelize(configDB);
// const User=require("../models/user")

//importar o fs permite interagir com o sitema de arquivo
const csv = require("csv");
const fs = require("fs");
const db = require("../db/models");
const csvController = {
  lista:
    ("/",
    (req, res) => {
      // caminho para o csv
      const arquivoCSV = "./src/asset/arquivo.csv";
      //ler o arquivo
      fs.createReadStream(arquivoCSV)
        // pipe - conectar fluxos de leitura e escrita, sem armazenar os dados intermediários em memória
        .pipe(csv.parse({ columns: true, delimiter: ";" }))

        // Acionar o evento data quando ler uma linha e executar a função enviando os dados como parâmetro
        .on("data", async (dadosLinha) => {
         // console.log(dadosLinha);

          // recuperar o registro no banco de dados para salvar um unico cpf
          // findOne um unico registro
          const user = await db.User.findOne({
            // Indicar quais colunas recuperar
            attributes: ["id"],
            // qual registro deve ser retornado do banco de dados
            where: { cpf: dadosLinha.cpf },
          });
          //verificar se o usuario não existe
          if (!user) {
            // cadastrar usuario no banco de dados
            await db.User.create(dadosLinha);
          }
        });

      return res.send("importação concluida");
    }),
};
module.exports = csvController;
