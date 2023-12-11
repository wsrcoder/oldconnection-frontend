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
   const senha = document.getElementById('senha')


   
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

function btn_responsavel()
{
    window.location.replace("./CadastroResponsavel.html")
}