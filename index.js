
const body = document.querySelector('body');
const articles = document.querySelectorAll('article');
const switchBtn = document.querySelector('.switch-btn');
const parentContainer = document.querySelectorAll('.themeC');

const removeTheme = () =>
{    
    parentContainer.forEach(container => container.classList.toggle('c-theme'));
     switchBtn.classList.toggle('slide');
     body.classList.toggle('light');
     articles.forEach(function(article){
     article.classList.toggle('theme');       
});
}

switchBtn.addEventListener('click',removeTheme);