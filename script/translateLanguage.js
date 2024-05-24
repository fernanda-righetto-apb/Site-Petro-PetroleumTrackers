let currentLanguage = 'pt';

function translate() {
    // Traduzir placeholders
    translatePlaceholders();

    // Traduzir outros elementos
    const elementsToTranslate = document.querySelectorAll('[data-pt]');
    elementsToTranslate.forEach(element => {
        const translatedText = element.getAttribute('data-' + currentLanguage);
        if (translatedText) {
            element.innerText = translatedText;
        }
    });

    // Trocar imagens
    switchImages();
}

function translatePlaceholders() {
    const inputElement = document.getElementById('searchInput');
    const placeholderPT = inputElement.getAttribute('data-pt');
    const placeholderEN = inputElement.getAttribute('data-en');
    
    if (currentLanguage === 'pt') {
        inputElement.setAttribute('placeholder', placeholderPT);
    } else {
        inputElement.setAttribute('placeholder', placeholderEN);
    }
}

function switchLanguage() {
    currentLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
    translate();

    const switchBtn = document.getElementById('translateButton');
    switchBtn.classList.toggle('active');
}

function switchImages() {
    const imageElements = document.querySelectorAll('[data-img-pt]');
    imageElements.forEach(imageElement => {
        const imgSrc = imageElement.getAttribute('data-img-' + currentLanguage);
        if (imgSrc) {
            imageElement.src = imgSrc;
        }
    });
}

// Chame essa função para traduzir todo o conteúdo da página inicialmente ao carregar a página
translate();
