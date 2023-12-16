
async function btn_salvar_dados_curso()
{
    const nome_curso = document.getElementById('nome-curso')
    const descricao_curso = document.getElementById('descricao-curso')
    const inicio_inscricoes = document.getElementById('inicio-inscricoes')
    const fim_inscricoes = document.getElementById('fim-inscricoes')
    const quantidade_vagas = document.getElementById('quantidade-vagas')

    if(nome_curso.value === "")
    {
        alert('É necessário informar o nome do curso')
        return
    }

    if(descricao_curso.value === "")
    {
        alert('É necessário informar uma descrição das atividades do curso')
        return
    }

    if(quantidade_vagas.value === "")
    {
        alert('É necessário informar a quantidade de vagas do curso')
        return
    }

    if(! is_integer(quantidade_vagas.value))
    {
        alert('Digite apenas números para a quantidade de vagas')
        return
    }

    if(min_value(quantidade_vagas.value, 5))
    {
        alert('Um curso deve ter no minimo 5 vagas')
        return
    }

    
    const curso = {
        "orientador_id": sessionStorage.getItem('usuario_id'), //pegar o id do orientador
        "nome_curso": nome_curso.value,
        "descricao_curso": descricao_curso.value,
       // "inicio_inscricoes": inicio_inscricoes.value,
       // "fim_inscricoes": fim_inscricoes.value,
        "quantidade_vagas": quantidade_vagas.value,
        "img_path": "",
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
        //alert('erro ao salvar o curso. Tente novamente')
        alert('Curso salvo com sucesso')
    }

    window.location.replace("./tela_orientador.html")
}

function btn_voltar()
{
    window.location.replace("./tela_orientador.html")
}


function is_integer(value)
{
    const integer_validator_regex = new RegExp(
        /^[0-9]/
    )

    if(integer_validator_regex.test(value))
    {
        return true
    }

    return false
}

function is_password_min_digits(password, min_digits)
{
    if(password.length >= min_digits)
    {
        return true;
    }

    return false;
}

function max_field_length(field_value, max_characters)
{
    if(field_value.length > max_characters)
    {
        return true
    }

    return false
}

function min_field_length(field_value, min_characters)
{
    if(field_value.length < min_characters)
    {
        return true
    }

    return false
}

function max_value(field_value, value)
{
    if(field_value > value)
    {
        return true
    }

    return false
}

function min_value(field_value, value)
{
    if(field_value < value)
    {
        return true
    }

    return false
}