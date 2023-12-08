
async function btn_salvar_dados_orientador()
{
    const email = document.getElementById('email')
    const confirmar_email = document.getElementById('confirmar_email')
    const senha = document.getElementById('senha')
    const confirmar_senha = document.getElementById('confirmar_senha')

    const nome = document.getElementById('nome')
    const sobrenome = document.getElementById('sobrenome')
    const data_nascimento = document.getElementById('data_nascimento')
    const sexo = document.getElementById('data_nascimento')
    const escolaridade = document.getElementById('escolaridade')
    const profissao = document.getElementById('profissao')
    const area_interesse = document.getElementById('area_interesse')
    const telefone = document.getElementById('telefone')
    const numero = document.getElementById('numero')
    const complemento = document.getElementById('complemento')
    const bairro = document.getElementById('bairro')
    const municipio = document.getElementById('municipio')
    const cep = document.getElementById('cep')

    const orientador = {
        "tipo_usuario": 4, //4 - orientador
        "nome": nome.value,
        "sobrenome": sobrenome.value,
        "email": email.value,
        "senha": senha.value,
        "data_nascimento": data_nascimento.value,
        "sexo": sexo.value,
        "escolaridade": escolaridade.value,
        "profissao": profissao.value,
        "area_interesse": area_interesse.value,
        "telefone": telefone.value,
        "logradouro": logradouro.value,
        "numero": numero.value,
        "complemento": complemento.value,
        "bairro": bairro.value,
        "municipio": municipio.value,
        "cep": cep.value,
    }


    salvar_dados_orientador(orientador)
}

async function salvar_dados_orientador(orientador)
{
    const url = 'https://oldconnection-api-vercel.vercel.app/usuarios/'


    const options = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orientador)
    }

    const request = await fetch(url, options)

    if(request.ok)
    {
        alert('orientador salvo com sucesso')
    }
    else {
        alert('erro ao salvar o orientador. Tente novamente')
    }

    window.location.replace("./index.html")
}

function btn_voltar()
{
    window.location.replace("./index.html")
}
