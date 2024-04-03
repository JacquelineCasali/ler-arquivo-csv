import React, { useState } from "react";
import "../Tabelas/Tabela.css";
import Papa from "papaparse";

export default function TabeladeClientes() {
  // Criar a variável para receber os dados
  const [dados, setDados] = useState([]);
  // Função para ler os dados do CSV
  const lerArquivo = (e) => {
    //  receber arquivo no formulario

    const arquivo = e.target.files[0];
    //verificar se exite o arquivo
    if (arquivo) {
      // analisando o arquivo
      Papa.parse(arquivo, {
        //cabeçalho
        header: true,
        // Converte automaticamente números e datas
        dynamicTyping: true,
        // Acessar complete após realizar a leitura do CSV
        complete: (result) => {
          console.log(result.data);
          setDados(result.data);
        },
        // Acessar error se houver erro na leitura do CSV
        error: (error) => {
          alert("Erro ao analisar o CSV:", error.message);
        },
      });
    }
  };

  return (
    <>
      <div className="titulo">
        <h3 className="h2">Ler dados do arquivo CSV</h3>
        {/* filtro */}

        <label className="label">Arquivo: </label>
        <input
          type="file"
          accept=".csv"
          onChange={lerArquivo}
          className="form"
        />
      </div>

      {/* <div className="d-flex justify-content-end">
       
      <Link to="/ordem" className="btn btn btn-primary mx-2">
          Ordem de Visitação
        </Link>
        <Link to="/cadastro" className="btn btn-success">
          Cadastrar
        </Link>
      </div> */}
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
            
              <th width={80}>CPF</th>
              <th width={130}>Nome</th>
              <th width={100}>E-mail</th>
              <th width={100}>Endereço</th>
            </tr>
          </thead>

          <tbody>
            {/* map mostra todos os resultados */}
            {dados.map((clientes, index) => {
              return (
                <tr key={index} cursor="pointer">
                              <td data-title="CPF">{clientes.cpf}</td>
                  <td data-title="Nome">{clientes.nome}</td>
                  <td data-title="E-mail">{clientes.email}</td>
                  <td data-title="Endereço">{clientes.endereco}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
