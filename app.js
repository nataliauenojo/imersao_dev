// Função para renderizar os resultados de uma pesquisa em uma seção HTML
function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    // Assume que 'dados' é um array de objetos com as propriedades 'titulo', 'descricao' e 'link'
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    console.log(campoPesquisa);

    if(!campoPesquisa ||campoPesquisa == " "){
        section.innerHTML = "<p> Nada foi encontrado.Você não digitou um artista ou musica </p>";
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string para armazenar o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada resultado da pesquisa
    for(let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        if(titulo.includes(campoPesquisa)||descricao.includes(campoPesquisa)||tags.includes(campoPesquisa) ){ 
            //Cria o novo elemento
            // Cria o HTML para um resultado individual
            resultados += `
            <div class="item-resultado">
                <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
                <p class="descricao-meta">${dado.descricao} </p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
            `;

        }
       
    }
    if(!resultados){
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atualiza o conteúdo da seção com os resultados
    section.innerHTML = resultados;
}

