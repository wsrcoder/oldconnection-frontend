'use strict'

async function obterUsuarios()
{
    const url = 'https://oldconnection-api-vercel.vercel.app/usuarios/'
    //const url = 'http://localhost:3000/usuarios'
    const response = await fetch(url)

    const usuarios = await response.json()

    return usuarios
}


async function on_login()
{
    const email = document.getElementById('email')
    const senha = document.getElementById('password')
    const max_password_digits = 3

    
    if(email.value === "")
    {
            alert("Campo do email não pode ser vazio.")
            return
    }

    if(senha.value === "")
    {
            alert("campo senha não pode ser vazio.")
            return
    }

    if(!is_valid_email(email.value))
    {
        alert("Informe um email valido, por favor.")
        return
    }

    if(! is_password_min_digits(password.value, max_password_digits))
    {
        alert("Uma senha deve ter no minimo " + max_password_digits + " digitos.")
        return
    }


    const usuarios = await obterUsuarios()
    let usuario
    let login_sucess = false;

    for(var i=0; i < usuarios.length; i++)
    {

        if(usuarios[i].email === email.value && usuarios[i].senha === senha.value)
        {
            usuario = usuarios[i]
            sessionStorage.setItem('usuario_credencial', usuario.email)
            sessionStorage.setItem('usuario_nome', usuario.nome)
            sessionStorage.setItem('usuario_sobrenome', usuario.sobrenome)
            sessionStorage.setItem('usuario_id', usuario.id)
            sessionStorage.setItem('usuario_tipo', usuario.tipo_usuario)

            login_sucess = true;
        }
    }

    if(login_sucess)
    {
        if(usuario.tipo_usuario === 1)
        {
            window.location.replace("./TelaPrincipalAluno.html")
        }
        else if(usuario.tipo_usuario === 2)
        {
            window.location.replace("./TelaPrincipalAluno.html")
        }
        else if(usuario.tipo_usuario === 3)
        {
            window.location.replace("./TelaPrincipalResponsavel.html")
        }
        else if(usuario.tipo_usuario === 4)
        {
            window.location.replace("./TelaOrientador.html")
        }
        
    }
    else
    {
        alert('usuario e/ou senha incorretos')
    }

}

function on_criar_conta_responsavel()
{
    window.location.replace("./cadastro_responsavel.html")
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

function is_password_min_digits(password, min_digits)
{
    if(password.length >= min_digits)
    {
        return true;
    }

    return false;
}