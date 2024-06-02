// js/news-carousel.js

// Simulação de notícias para o carrossel
const noticias = [
    {
        texto: "O que é GPT-4 e como acessá-lo?",
        imagem: "https://tm.ibxk.com.br/2023/12/20/20134303359223.jpg?text=Imagem+1",
        link: "https://www.tecmundo.com.br/mercado/275208-gpt-4-acessa-lo.htm"
    },
    {
        texto: "Explainable AI",
        imagem: "https://lh3.googleusercontent.com/hfvU2iEMiWF_FcAD6UTdinFLVPgSS8Vtl9e0vb8CR64t9YA5Lw0PK4KP1J1LlJH5wysyEc5CsEM=e14-rw-lo-sc0xffffff-w300?text=Imagem+2",
        link: "https://cloud.google.com/explainable-ai?hl=pt-br"
    },
    {
        texto: "Data Science : Definition, Challenges and Use cases",
        imagem: "https://datascientest.com/en/wp-content/uploads/sites/9/2021/01/Infographie-Anglais-1024x691.png?text=Imagem+3",
        link: "https://datascientest.com/en/data-science-definition"
    }
];

const carouselContainer = document.querySelector('.carousel-container');
const carouselPrevBtn = document.querySelector('.carousel-prev');
const carouselNextBtn = document.querySelector('.carousel-next');

function initializeCarousel() {
    noticias.forEach((noticia, index) => {
        const slide = document.createElement('div');
        slide.classList.add('slide');
        if (index === 0) {
            slide.classList.add('active'); // Adiciona a classe active ao primeiro slide
        }
        slide.innerHTML = `
            <a href="${noticia.link}" target="_blank">
                <img src="${noticia.imagem}" alt="Imagem ${index + 1}" style="max-width: 100%; height: auto;">
                <h3>${noticia.texto}</h3>
            </a>
        `;
        carouselContainer.appendChild(slide);
    });

    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    carouselNextBtn.addEventListener('click', nextSlide);
    carouselPrevBtn.addEventListener('click', prevSlide);

    setInterval(nextSlide, 5000);
    showSlide(currentSlide); // Exibe o primeiro slide inicialmente
}

initializeCarousel();
