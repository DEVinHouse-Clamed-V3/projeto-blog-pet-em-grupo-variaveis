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

        const pArticleDetails2 = document.createElement('p');
        pArticleDetails2.classList.add('read');
        pArticleDetails2.innerText = post.tempoLeitura;

        divArticleDetails.append(pArticleDetails, pArticleDetails2);

        divArticleTitle.append(h2, divArticleDetails);

        article.append(divArticleTitle);
    })
}