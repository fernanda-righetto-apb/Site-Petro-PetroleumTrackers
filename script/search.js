const inputPesquisa = document.querySelector('#inputPesquisa');
const btnPesquisa = document.querySelector('#btnPesquisa');
const imgfiltro_menu2 = document.querySelector('#imgfiltro_menu2');
const pesquisa1 = document.querySelector('#pesquisa1');
const corpo = document.querySelector('body');
const pesquisa = document.querySelector('.filtro-pesquisa');
let contadorPesquisar = true;

imgPesquisa.addEventListener('click', () => {
    if(pesquisa.value === '1-NAB-6-SE52'){
        poco.style.display = 'block';
        elementosSelecionados.innerHTML = 'Elementos selecionados: 1';
    }
});

document.addEventListener('keypress', function(event) {
    if(event.key === 'Enter'){
        if(pesquisa.value === '1-NAB-6-SE52'){
            poco.style.display = 'block';
            elementosSelecionados.innerHTML = 'Elementos selecionados: 1';
        }
    }
})

imgfiltro_menu2.addEventListener('click', () => {
    if(contadorPesquisar){
        pesquisa1.setAttribute('class', 'block');
        contadorPesquisar = false;
    } else {
        pesquisa1.setAttribute('class', 'pesquisa1-desaparecer');
        contadorPesquisar = true;
    } 
})
