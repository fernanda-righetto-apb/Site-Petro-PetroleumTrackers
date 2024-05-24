//const filtro = document.querySelector('#filtro');
const filtro2 = document.querySelector('#filtro2');
const imgfiltro_menu = document.querySelector('#imgfiltro_menu');
const header2 = document.querySelector('#header2');
const body = document.querySelector('body');
const footer = document.querySelector('#footer');
let contador3 = true;

function mostraFiltro(){
    
    if(contador3){
        //body.setAttribute('class', 'corDeFundo');
        header2.setAttribute('class', 'header2 opaco');
        mapa.setAttribute('class', 'mapa opaco');
        footer.setAttribute('class', 'footer opaco');
        filtro2.style.display = 'block';
        
        contador3 = false;
    } else {
        filtro2.style.display = 'none';
        header2.setAttribute('class', 'header2 naoOpaco');
        mapa.setAttribute('class', 'mapa naoOpaco');
        footer.setAttribute('class', 'footer naoOpaco');
        contador3 = true;
    }
}

imgfiltro_menu.addEventListener('click', () => {
    mostraFiltro(); 
})

function naoOpaco(){
    header2.setAttribute('class', 'header2 naoOpaco');
    mapa.setAttribute('class', 'mapa naoOpaco');
    footer.setAttribute('class', 'footer naoOpaco');
    contador3 = true;
}
