const campos = document.querySelector('#campos');
const btnCampos = document.querySelector('#btn-campos');
const iconeCampos = document.querySelector('#icone-campos');
const infoCampos = document.querySelector('#info-campos');
const detalhesCampos = document.querySelector('.detalhesCampos');
let contadorIconeCampos = true;


btnCampos.addEventListener('click', () => {

    if(btnCampos.checked){

        
        iconeCampos.style.display = 'block';
        mapa__svg.setAttribute('class', 'mapa__svg setentaPorcento');
        info.setAttribute('class', 'informacoes block');
        info.style.backgroundImage="url(img/informacoes.jpg)";
        infoCampos.style.display = 'block';
        elementosSelecionados.innerHTML = `Elemetos selecionados: ${contadorElementosSelecionados += 1} `;
    } else if(btnPocos.checked || btnBlocos.checked || btnBacia.checked) {

        iconeCampos.style.display = 'none';
        zoom.removeAttribute('class', 'zoom-es');
        campos.style.display = 'none';
        infoCampos.style.display = 'none';
        detalhesCampos.style.display = 'none';
        elementosSelecionados.innerHTML = `Elemetos selecionados: ${contadorElementosSelecionados -= 1} `;
    } else {

        iconeCampos.style.display = 'none';
        info.setAttribute('class', 'informacoes');
        zoom.removeAttribute('class', 'zoom-es');
        campos.style.display = 'none';
        infoCampos.style.display = 'none';
        detalhesCampos.style.display = 'none';
        elementosSelecionados.innerHTML = `Elemetos selecionados: ${contadorElementosSelecionados -= 1} `;
    }
})

iconeCampos.addEventListener('click', () => {
    
    zoom.setAttribute('class', 'zoom-es');
    iconeCampos.style.display = 'none';
    campos.style.display = 'block';

    poco.style.display = 'none';
    blocos.style.display = 'none';
    icone_bacia_do_panara.style.display = 'none';
    infoPocos.style.display = 'none';
    infoCampos.style.display = 'none';
    detalhesCampos.style.display = 'block';
})
