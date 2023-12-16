
async function btn_salvar_dados_orientador()
{
    const email = document.getElementById('email')
    const email_confirmacao = document.getElementById('email-confirmacao')
    const password = document.getElementById('password')
    const password_confirmacao = document.getElementById('password-confirmacao')
    

    const nome_orientador = document.getElementById('nome-orientador')
    const sobrenome_orientador = document.getElementById('sobrenome-orientador')
    const idade_orientador = document.getElementById('idade-orientador')
    const telefone_orientador = document.getElementById('telefone-orientador')
    const escolaridade = document.getElementById('escolaridade')
    const profissao = document.getElementById('profissao')
    
    const descricao_orientador = document.getElementById('descricao-orientador')

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
    if(!is_integer(idade_orientador.value))
    {
            alert('Para idade digite apenas números')
            return
    }

    if(max_value(idade_orientador.value, 120))
    {
        alert('A idade não pode ser superior a 120 anos')
            return
    }

    if(min_value(idade_orientador.value, 18))
    {
        alert('A idade não pode inferior a 18 anos')
            return
    }

    if(!is_integer(telefone_orientador.value))
    {
            alert('Para o telefone do orientador digite apenas números')
            return
    }

    if(max_field_length(telefone_orientador.value, 11))
    {
        alert('O campo telefone deve ter no máximo 11 digitos incluindo o DDD.')
            return
    }

    if(min_field_length(telefone_orientador.value, 9))
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

    if(nome_orientador.value === "")
    {
        alert('o campo de nome do orientador não pode ser vazio')
        return
    }

    if(sobrenome_orientador.value === "")
    {
        alert('o campo de sobrenome do orientador não pode ser vazio')
        return
    }
      
    if(telefone_orientador.value === "")
    {
        alert('o campo de telefone do orientador não pode ser vazio')
        return
    }

    if(profissao.value === "")
    {
        alert('É necessário informar sua profissão')
        return
    }

    if(descricao_orientador.value === "")
    {
        alert("É necessário fazer uma apresentação no campo 'apresentação do orientador'")
        return
    }



    const orientador = {
        "tipo_usuario": 2, 
        "email": email.value,
        "password": password.value,
        "nome_orientador": nome_orientador.value,
        "sobrenome_orientador": sobrenome_orientador.value,
        "idade_orientador": idade_orientador.value,
        "telefone_orientador": telefone_orientador.value,
        "profissao": profissao.value,
        "escolaridade": escolaridade.value,
        "descricao_orientador": descricao_orientador.value,
    }

    salvar_dados_orientador(orientador)

}

async function salvar_dados_orientador(orientador)
{
    const url = 'https://oldconnection-api-vercel.vercel.app/usuarios/'
    //const url = 'http://localhost:3000/usuarios'

    const options = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orientador)
    }

    const request = await fetch(url, options)

    if(!request.ok)
    {
        alert('erro ao salvar o orientador. Tente novamente')
        return
    }

    alert('orientador salvo com sucesso')
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
