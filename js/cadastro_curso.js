
async function btn_salvar_dados_curso()
{
    const nome_curso = document.getElementById('nome_curso')
    const descricao_curso = document.getElementById('descricao_curso')
    const inicio_inscricoes = document.getElementById('inicio_inscricoes')
    const fim_inscricoes = document.getElementById('fim_inscricoes')
    const quantidade_vagas = document.getElementById('quantidade_vagas')
    const tel_contato = document.getElementById('tel_contato')
    //const selecionar_imagens = document.getElementById('selecionar_imagens')
    const curso_etiqueta = document.getElementById('curso_etiqueta')
    //const adicionar_etiqueta = document.getElementById('adicionar_etiqueta')
    const video_apresentacao = document.getElementById('video_apresentacao')
    const logradouro = document.getElementById('logradouro')
    const numero = document.getElementById('numero')
    const complemento = document.getElementById('complemento')
    const bairro = document.getElementById('bairro')
    const municipio = document.getElementById('municipio')
    const cep = document.getElementById('cep')

    const curso = {
        "orientador_id": 0, //pegar o id do orientador
        "nome_curso": nome_curso.value,
        "descricao_curso": descricao_curso.value,
        "inicio_inscricoes": inicio_inscricoes.value,
        "fim_inscricoes": fim_inscricoes.value,
        "quantidade_vagas": quantidade_vagas.value,
        "tel_contato": tel_contato.value,
        "img_path":"imgs/curso-default.jpg",
        "curso_etiqueta": curso_etiqueta.value,
        "video_apresentacao": video_apresentacao.value,
        "logradouro": logradouro.value,
        "numero": numero.value,
        "complemento": complemento.value,
        "bairro": bairro.value,
       // "municipio": municipio.value,
        "cep": cep.value,
    }


    salvar_dados_curso(curso)
}

async function salvar_dados_curso(curso)
{
    const url = 'https://oldconnection-api-vercel.vercel.app/cursos/'
    //const url = 'http://localhost:3000/cursos'


    const options = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(curso)
    }

    const request = await fetch(url, options)

    if(request.ok)
    {
        alert('Curso salvo com sucesso')
    }
    else {
        alert('erro ao salvar o curso. Tente novamente')
    }

    window.location.replace("./TelaOrientador.html")
}

function btn_voltar()
{
    window.location.replace("./TelaOrientador.html")
}