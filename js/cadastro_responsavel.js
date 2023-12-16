
async function btn_salvar_dados_responsavel()
{
    const email = document.getElementById('email')
    const email_confirmacao = document.getElementById('email-confirmacao')
    const password = document.getElementById('password')
    const password_confirmacao = document.getElementById('password-confirmacao')
    

    const nome_responsavel = document.getElementById('nome-responsavel')
    const sobrenome_responsavel = document.getElementById('sobrenome-responsavel')
    const idade_responsavel = document.getElementById('idade-responsavel')
    const telefone_responsavel = document.getElementById('telefone-responsavel')
    const nome_aluno = document.getElementById('nome-aluno')
    const sobrenome_aluno = document.getElementById('sobrenome-aluno')
    const idade_aluno = document.getElementById('idade-aluno')
    const telefone_aluno = document.getElementById('telefone-aluno')
    const descricao_aluno = document.getElementById('descricao-aluno')
    const necessidades_aluno = document.getElementById('necessidades-aluno')

    const btn_cancelar = document.getElementById('btn-cancelar')
    const btn_salvar = document.getElementById('btn-salvar')

    const min_password_digits = 3;

    //email e senha em formato valido
    
    if(!is_valid_email(email.value))
    {
            alert("Informe um email valido, por favor.")
            return
    }
    
    if(! is_password_min_digits(password.value, min_password_digits))
    {
            alert("Uma senha deve ter no minimo " + min_password_digits + " digitos.")
            return
    }

    //validação se dado e a confirmação sao iguais
    if(email.value !== email_confirmacao.value)
    {
        alert('o email e a confirmação do email devem ser iguais')
        return
    }

    if(password.value !== password_confirmacao.value)
    {
        alert('a senha e a confirmação da senha devem ser iguais')
        return
    }

    //validações númericas
    if(!is_integer(idade_responsavel.value))
    {
            alert('Para idade digite apenas números')
            return
    }

    if(max_value(idade_responsavel.value, 120))
    {
        alert('A idade não pode ser superior a 120 anos')
            return
    }

    if(min_value(idade_responsavel.value, 18))
    {
        alert('A idade não pode inferior a 18 anos')
            return
    }

    if(!is_integer(telefone_responsavel.value))
    {
            alert('Para o telefone do responsavel digite apenas números')
            return
    }

    if(max_field_length(telefone_responsavel.value, 11))
    {
        alert('O campo telefone deve ter no máximo 11 digitos incluindo o DDD.')
            return
    }

    if(min_field_length(telefone_responsavel.value, 9))
    {
        alert('O campo telefone deve ter no mínimo 9.')
            return
    }


    if(!is_integer(idade_aluno.value))
    {
            alert('Para idade do aluno digite apenas números')
            return
    }

    if(max_value(idade_aluno.value, 120))
    {
        alert('A idade do aluno não pode ser superior a 120 anos')
            return
    }

    

    if(!is_integer(telefone_aluno.value))
    {
            alert('Para o telefone do aluno digite apenas números')
            return
    }


    if(max_field_length(telefone_aluno.value, 11))
    {
        alert('O campo telefone deve ter no máximo 11 digitos incluindo o DDD.')
            return
    }

    if(min_field_length(telefone_aluno.value, 9))
    {
        alert('O campo telefone deve ter no mínimo 9.')
            return
    }


    //validação de campos vazios
    if(email.value === "")
    {
        alert('o campo email não pode ser vazio')
        return
    }

    if(password.value === "")
    {
        alert('o campo de senha não pode ser vazio')
        return
    }

    if(nome_responsavel.value === "")
    {
        alert('o campo de nome do responsável não pode ser vazio')
        return
    }

    if(sobrenome_responsavel.value === "")
    {
        alert('o campo de sobrenome do responsável não pode ser vazio')
        return
    }
      
    if(telefone_responsavel.value === "")
    {
        alert('o campo de telefone do responsável não pode ser vazio')
        return
    }

    if(nome_aluno.value === "")
    {
        alert('o campo de nome do aluno não pode ser vazio')
        return
    }

    if(sobrenome_aluno.value === "")
    {
        alert('o campo de sobrenome do aluno não pode ser vazio')
        return
    }

    if(idade_aluno.value === "")
    {
        alert('o campo de idade do aluno não pode ser vazio')
        return
    }

    if(telefone_aluno.value === "")
    {
        alert('o campo de telefone do aluno não pode ser vazio')
        return
    }



    const responsavel = {
        "tipo_usuario": 1, 
        "email": email.value,
        "password": password.value,
        "nome_responsavel": nome_responsavel.value,
        "sobrenome_responsavel": sobrenome_responsavel.value,
        "idade_responsavel": idade_responsavel.value,
        "telefone_responsavel": telefone_responsavel.value,
        "nome_aluno": nome_aluno.value,
        "sobrenome_aluno": sobrenome_aluno.value,
        "idade_aluno": idade_aluno.value,
        "telefone_aluno": telefone_aluno.value,
        "descricao_aluno": descricao_aluno.value,
        "necessidades_aluno": necessidades_aluno.value,
    }

    salvar_dados_responsavel(responsavel)

}

async function salvar_dados_responsavel(responsavel)
{
    //const url = 'https://oldconnection-api-vercel.vercel.app/usuarios/'
    const url = 'http://localhost:3000/usuarios'

    const options = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(responsavel)
    }

    const request = await fetch(url, options)

    if(!request.ok)
    {
        //alert('erro ao salvar o responsavel. Tente novamente')
        alert('Responsavel salvo com sucesso')
        return
    }

    alert('responsavel salvo com sucesso')
    window.location.replace("./index.html")
}

function btn_voltar()
{
    window.location.replace("./index.html")
}

function is_valid_email(email)
{
    const email_regex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-z]{2,}$/
    )

    if(email_regex.test(email))
    {
        return true;
    }

    return false;
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
