



const content_container = document.getElementById('content')

gerar_conteudo()

async function gerar_conteudo()
{
    const cursos = await obter_cursos()


    const nome = sessionStorage.getItem('usuario_nome')
    let saudacao_text = document.createElement('h1')
    saudacao_text.innerText = 'Que bom te ver por aqui, ' + nome + '. Veja abaixo a lista de cursos disponibilizados por você:'

    content_container.appendChild(saudacao_text)


    for(let i=0; i < cursos.length; i++)
    {

        if(cursos[i].orientador_id == sessionStorage.getItem('usuario_id'))
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


function criar_nova_secao(curso)
{
    //randomizar uma base imagens
    //curso.img_path = "imgs/curso-default.jpg"
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

                let quantidade_vagas = document.createElement('p')
                quantidade_vagas.innerText = "Vagas: " + curso.quantidade_vagas
            container_description.appendChild(quantidade_vagas)

            let container_actions = document.createElement('div')
            container_actions.className = 'container-actions'
            /*
                let action_item_inscrever = document.createElement('div')
                action_item_inscrever.className = 'action-item'
                    let btn_inscrever = document.createElement('button')
                    btn_inscrever.innerText = "Inscrever"
                    btn_inscrever.onclick = function()
                    {
                        const date = new Date()
                        const matricula ={
                            "id_reponsavel": sessionStorage.getItem('usuario_id'),
                            "id_curso": curso.id,
                            "data_inscricao": date.getDate()
                        }

                        salvar_dados_matricula(matricula)
                    }
                
                    action_item_inscrever.appendChild(btn_inscrever)

            container_actions.appendChild(action_item_inscrever)
            */
        course_presentation.appendChild(container_title)
        course_presentation.appendChild(container_img)
        course_presentation.appendChild(container_description)
        course_presentation.appendChild(container_actions)

    course_container.appendChild(course_presentation)


    content_container.appendChild(course_container)
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
        return
    }

    alert('matricula realizada com sucesso!')
}

function btn_logout()
{
    window.location.replace("./index.html")
}

function btn_cadastrar_curso()
{
    window.location.replace("./cadastro_curso.html")
}

function btn_logout()
{
    window.location.replace("./index.html")
}

function ajuda_home()
{
    var audio = new Audio('audios/ajuda_home_orientador.mp3');
audio.play();
}

function ajuda_cadastrar_curso()
{
    var audio = new Audio('audios/ajuda_cadastrar_curso.mp3');
audio.play();
}

function ajuda_logout()
{
    var audio = new Audio('audios/ajuda_logout.mp3');
audio.play();
}