document.addEventListener('DOMContentLoaded', carregarPost);

function localStoragePostsVazia() {
    console.log('Nenhum post encontrado.');

    const articles = document.querySelector('#articles');

    const emptyArticles = document.createElement('article');

}

function carregarPost() {
    console.log('Carregando posts...');

    const postsLocalStorage = JSON.parse(localStorage.getItem('posts')) || localStoragePostsVazia();

    const articles = document.querySelector('#articles');

    articles.innerHTML = '';
}