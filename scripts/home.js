document.addEventListener('DOMContentLoaded', carregarPost);

function tempoLeitura(texto) {
    const palavras = texto.split(' ');
    const tempo = Math.ceil(palavras.length / 200);
    return tempo;
}

function localStoragePostsVazia() {
    console.log('Nenhum post encontrado.');

    const articles = document.getElementById('articles');

    const emptyArticles = document.createElement('article');
    emptyArticles.classList.add('card-empty');

    const divEmptyText = document.createElement('div');
    divEmptyText.classList.add('empty-text');

    const p = document.createElement('p');
    p.innerText = 'Nenhum post encontrado.';

    divEmptyText.append(p);

    emptyArticles.append(divEmptyText);

    articles.append(emptyArticles);
}

function carregarPost() {

    const postsLocalStorage = JSON.parse(localStorage.getItem('posts')) || [];

    const articles = document.querySelector('#articles');

    articles.innerHTML = '';

    if (postsLocalStorage.length === 0) {
        localStoragePostsVazia();
        return;
    }

    postsLocalStorage.forEach(post => {
        const article = document.createElement('article');
        article.classList.add('card');

        const divCardImage = document.createElement('div');
        divCardImage.classList.add('card-image');

        const image = document.createElement('img');
        const imageSrc = post.foto || 'https://via.placeholder.com/300';
        image.src = imageSrc;

        const p = document.createElement('p');
        p.classList.add('px-1', 'text-gray-light');
        p.innerText = post.catgoria;

        divCardImage.append(image, p);

        article.append(divCardImage);

        const divArticleTitle = document.createElement('div');
        divArticleTitle.classList.add('px-1');

        const h2 = document.createElement('h2');
        h2.classList.add('article-title');
        h2.innerText = post.titulo;

        const divArticleDetails = document.createElement('div');
        divArticleDetails.classList.add('article-details', 'text-gray-light');

        const pArticleDetails = document.createElement('p');
        pArticleDetails.innerText = post.dataCriacao;

        const leituraMinutos = tempoLeitura(post.descricao);
        const pArticleDetails2 = document.createElement('p');
        pArticleDetails2.classList.add('read');
        pArticleDetails2.innerText = leituraMinutos;

        divArticleDetails.append(pArticleDetails, pArticleDetails2);

        divArticleTitle.append(h2, divArticleDetails);

        article.append(divArticleTitle);
    })
}