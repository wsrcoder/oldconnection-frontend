
async function btn_salvar_dados_responsavel()
{
    const email = document.getElementById('email')
    const confirmar_email = document.getElementById('confirmar_email')
    const senha = document.getElementById('senha')
    const confirmar_senha = document.getElementById('confirmar_senha')
    

    const nome_responsavel = document.getElementById('nome_responsavel')
    const data_nascimento = document.getElementById('data_nascimento')
    const sexo = document.getElementById('sexo')
    const escolaridade = document.getElementById('escolaridade')
    const profissao = document.getElementById('profissao')

    const logradouro = document.getElementById('logradouro')
    const numero = document.getElementById('numero')
    const complemento = document.getElementById('complemento')
    const bairro = document.getElementById('bairro')
    const municipio = document.getElementById('municipio')
    const cep = document.getElementById('cep')

    const botao_voltar = document.getElementById('botao_voltar')
    const botao_confirmar = document.getElementById('botao_confirmar')


    if(email.value !== confirmar_email.value)
    {
        alert('o email e sua confirmação devem ser iguais')
        return
    }

    if(senha.value !== confirmar_senha.value)
    {
        alert('a senha e sua confirmação devem ser iguais')
        return
    }

    const responsavel = {
        "tipo_usuario": 3, //3 - reponsavel
        "email": email.value,
        "senha": senha.value,
        "nome_responsavel": nome_responsavel.value,
        "data_nascimento": data_nascimento.value,
        "sexo": sexo.value,
        "escolaridade": escolaridade.value,
        "profissao": profissao.value,
        "logradouro": logradouro.value,
        "numero": numero.value,
        "complemento": complemento.value,
        "bairro": bairro.value,
        "municipio": municipio.value,
        "cep": cep.value,
    }

    salvar_dados_responsavel(responsavel)

}

async function salvar_dados_responsavel(responsavel)
{
    const url = 'https://oldconnection-api-vercel.vercel.app/usuarios/'


    const options = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(responsavel)
    }

    const request = await fetch(url, options)

    if(request.ok)
    {
        alert('responsavel salvo com sucesso')
    }
    else {
        alert('erro ao salvar o responsavel. Tente novamente')
    }

    window.location.replace("./index.html")
}

function btn_voltar()
{
    window.location.replace("./index.html")
}
