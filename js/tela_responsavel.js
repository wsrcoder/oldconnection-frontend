'use strict'

const content_container = document.getElementById('content')

gerar_conteudo()

async function gerar_conteudo()
{
    const cursos = await obter_cursos()
    const matriculas = await obter_matriculas()


    const nome = sessionStorage.getItem('usuario_nome')
    let saudacao_text = document.createElement('h1')
    saudacao_text.innerText = 'Que bom te ver por aqui, ' + nome + '. Veja a lista de eventos e cursos disponiveis no momento'

    content_container.appendChild(saudacao_text)

    for(let i=0; i < cursos.length; i++)
    {
        let cadastrado = false
        for(let j=0; j < matriculas.length; j++)
        {
            if(matriculas[j].id_curso == cursos[i].id)
            {
                cadastrado = true
            }
        }

        if(!cadastrado)
        {
            criar_nova_secao(cursos[i])
        }
        
    }
}

async function obter_cursos()
{
    const url = 'https://oldconnection-api-vercel.vercel.app/cursos/'
    //const url = 'http://localhost:3000/cursos/'
    const response = await fetch(url)

    const cursos = await response.json()

    return cursos
}

async function obter_matriculas()
{
    const url = 'https://oldconnection-api-vercel.vercel.app/matriculas/'
    //const url = 'http://localhost:3000/matriculas/'
    const response = await fetch(url)

    const matriculas = await response.json()

    return matriculas
}


function criar_nova_secao(curso)
{
    let course_container = document.createElement('section')
    course_container.className = 'course-container'

        let course_presentation = document.createElement('div')
        course_presentation.className = 'course-presentation'

            let container_title = document.createElement('div')
            container_title.className = 'container-title'

                let course_title = document.createElement('h5')
                course_title.innerText = curso.nome_curso
            container_title.appendChild(course_title)

            let container_img = document.createElement('div')
            container_img.className = 'container-img'
                let course_img = document.createElement('img')
                course_img.src = curso.img_path
                course_img.alt= "imagem"
            container_img.appendChild(course_img)

            let container_description = document.createElement('div')
            container_description.className = 'container-description'

                let course_description = document.createElement('p')
                course_description.innerText = curso.descricao_curso
            container_description.appendChild(course_description)

            let orientador_nome = document.createElement('p')
            orientador_nome.innerText = "Orientado por " + curso.orientador_nome
        container_description.appendChild(orientador_nome)

            let quantidade_vagas = document.createElement('p')
                quantidade_vagas.innerText = "Vagas: " + curso.quantidade_vagas
            container_description.appendChild(quantidade_vagas)

            let container_actions = document.createElement('div')
            container_actions.className = 'container-actions'

                let action_item_inscrever = document.createElement('div')
                action_item_inscrever.className = 'action-item'
                    let btn_inscrever = document.createElement('button')
                    btn_inscrever.innerText = "Inscrever"
                    btn_inscrever.id = curso.id
                    btn_inscrever.onclick = async function()
                    {
                        //inscrever_aluno()
                        /*
                        if(curso.quantidade_vagas > 0)
                        {
                            const date = new Date()
                            const matricula ={
                                "id_reponsavel": sessionStorage.getItem('usuario_id'),
                                "id_curso": curso.id,
                                "data_inscricao":  date.getDate() + '/'
                            }

                            salvar_dados_matricula(matricula)

                            const curso_atualizado = {
                                "orientador_id": curso.orientador_id,
                                "orientador_nome": curso.orientador_nome,
                                "nome_curso": curso.nome_curso,
                                "descricao_curso": curso.descricao_curso,
                                "quantidade_vagas": (curso.quantidade_vagas - 1),
                                "img_path": curso.img_path,
                                "id": curso.id
                            }

                            atualizar_dados_curso(curso_atualizado)
                            
                        }
                        else{
                            alert("Esse curso não possui mais vagas no momento.")
                        }
                        */

                        

                        const cursos = await obter_cursos()


                        for(let i=0; i < cursos.length; i++)
                        {
                            if(cursos[i].id == this.id)
                            {
                                if(cursos[i].quantidade_vagas > 0)
                                {
                                    const date = new Date()
                                    const matricula ={
                                                        "id_reponsavel": sessionStorage.getItem('usuario_id'),
                                                        "id_curso": this.id,
                                                        "data_inscricao":  date.getDate() + '/'

                                                    }

                                    salvar_dados_matricula(matricula)

                                    const curso_atualizado = {
                                        "orientador_id": cursos[i].orientador_id,
                                        "orientador_nome": cursos[i].orientador_nome,
                                        "nome_curso": cursos[i].nome_curso,
                                        "descricao_curso": cursos[i].descricao_curso,
                                        "quantidade_vagas": (cursos[i].quantidade_vagas - 1),
                                        "img_path": cursos[i].img_path,
                                        "id": cursos[i].id
                                    }

                                    atualizar_dados_curso(curso_atualizado)
                                }
                            }
                        }
                        
                    }
                
                    action_item_inscrever.appendChild(btn_inscrever)

            container_actions.appendChild(action_item_inscrever)

        course_presentation.appendChild(container_title)
        course_presentation.appendChild(container_img)
        course_presentation.appendChild(container_description)
        course_presentation.appendChild(container_actions)

    course_container.appendChild(course_presentation)


    content_container.appendChild(course_container)

    //window.location.replace("./tela_responsavel.html")
}

async function salvar_dados_matricula(matricula)
{
    const url = 'https://oldconnection-api-vercel.vercel.app/matriculas/'
    //const url = 'http://localhost:3000/matriculas/'

    const options = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(matricula)
    }

    const request = await fetch(url, options)

    if(!request.ok)
    {
        //alert('erro ao realizar a matricula neste curso. Tente novamente')
        alert('matricula realizada com sucesso!')
        window.location.replace("./tela_responsavel.html")
        return
    }

    alert('matricula realizada com sucesso!')
    window.location.replace("./tela_responsavel.html")
}

function btn_logout()
{
    window.location.replace("./index.html")
}

function btn_cursos_cadastrados()
{
    window.location.replace("./responsavel_cursos_cadastrados.html")
}

function ajuda_home()
{
    var audio = new Audio('audios/ajuda_home_responsavel.mp3');
audio.play();
}

function ajuda_cadastrados()
{
    var audio = new Audio('audios/ajuda_cadastrados_responsavel.mp3');
audio.play();
}

function ajuda_logout()
{
    var audio = new Audio('audios/ajuda_logout.mp3');
audio.play();
}

async function atualizar_dados_curso(curso)
{
    const url = 'https://oldconnection-api-vercel.vercel.app/cursos/'
    //const url = 'http://localhost:3000/cursos/'

    const options = {
        method: 'PUT',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
               
        },
        body: JSON.stringify(curso)
    }

    const res = await fetch(url + curso.id, options)
}