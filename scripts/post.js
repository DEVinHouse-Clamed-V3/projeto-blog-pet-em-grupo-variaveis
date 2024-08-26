function carregarPosts() {

    const postsNoLocalStorage = JSON.parse(localStorage.getItem("posts"))

    //PEGAR O ID NA URL
    const url = new URL(window.location.href)
    const params = new URLSearchParams(url.search)
    const idUrl = params.get('id')
    //PROCURANDO O ID DA URL NO LOCAL STORAGE
    const postEncontrado = postsNoLocalStorage.find((item) => item.id == idUrl)

    if (postEncontrado === undefined) {

        document.getElementById('error').style.display = "block"
        document.getElementById('posts').style.display = "none"

    }
    else {
        document.getElementById('nome').innerText = postEncontrado.titulo
        document.getElementById('foto').setAttribute('src', postEncontrado.foto)
        document.getElementById('descricao').innerText = postEncontrado.descricao
        document.getElementById('categoria').innerText = postEncontrado.categoria
        document.getElementById('data').innerText = postEncontrado.dataCriacao
    }


}


document.addEventListener('DOMContentLoaded', carregarPosts)


