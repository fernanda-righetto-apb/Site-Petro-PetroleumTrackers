const btnFullscreen = document.querySelector('#btnFullscreen');
const mapa = document.querySelector('#mapa');
const imgFiltro = document.querySelector('#imgFiltro');
const filtro3 = document.querySelector('#filtro3');
let contadorImgFiltro = true;

btnFullscreen.addEventListener('click', () => {
    if(!document.fullscreenElement){
        mapa.requestFullscreen();
        imgFiltro.setAttribute('class', 'img__filtro block');
    } else {
        document.exitFullscreen();
        imgFiltro.setAttribute('class', 'img__filtro');
        filtro2.setAttribute('class', 'filtro2');
    }
})

imgFiltro.addEventListener('click', () => {
    
    if(document.fullscreenElement){
        
        if(contadorImgFiltro){
            filtro3.style.display = 'block';
            contadorImgFiltro = false;
        } else {
            filtro3.style.display = 'none';
            contadorImgFiltro = true;
        }
    }
})

document.addEventListener('fullscreenchange', function(event) {
    if (!document.fullscreenElement) {
        imgFiltro.setAttribute('class', 'img__filtro');
        console.log("O navegador saiu do modo de tela cheia!");
        filtro2.setAttribute('class', 'filtro2');
        filtro3.style.display = 'none';
    }
});

