const btnPocos = document.querySelector('#btnPocos');
const infoPocos = document.querySelector('#info-pocos');
const elementosSelecionados = document.querySelector('#elementos-selecionados');
let contadorElementosSelecionados = 0;
const languageToggle = document.querySelector('#language-toggle')

btnPocos.addEventListener('click', () => {
    if(btnPocos.checked){
        poco.style.display = 'block';
        mapa__svg.setAttribute('class', 'mapa__svg setentaPorcento');
        info.setAttribute('class', 'informacoes block');
        infoPocos.style.display ='block';
        info.style.backgroundImage="url(img/informacoes.jpg)";
        detalhesPoco.style.display = 'none';

        if(!languageToggle.checked) {

            elementosSelecionados.innerHTML = `Elementos selecionados: ${contadorElementosSelecionados += 1} `;
        } else {

            elementosSelecionados.innerHTML = `Selected Elements: ${contadorElementosSelecionados += 1} `;
        }


    } else if(btnBlocos.checked || btnCampos.checked || btnBacia.checked) {

        poco.style.display = 'none';
        infoPocos.style.display ='none';
        if(!languageToggle.checked) {

            elementosSelecionados.innerHTML = `Elementos selecionados: ${contadorElementosSelecionados -= 1} `;
        }  else {

            elementosSelecionados.innerHTML = `Selected Elements: ${contadorElementosSelecionados -= 1} `;
        }
    } 
    /*else if(btnCampos.checked) {

        poco.setAttribute('class', 'none');
        infoPocos.style.display ='none';
    } else if(btnBacia.checked) {

        poco.setAttribute('class', 'none');
        infoPocos.style.display ='none';
    }*/
    else {
        info.setAttribute('class', 'informacoes');
        poco.style.display = 'none';
        infoPocos.style.display ='none';
        if(!languageToggle.checked) {

            elementosSelecionados.innerHTML = `Elementos selecionados: ${contadorElementosSelecionados -= 1} `;
        } else {

            elementosSelecionados.innerHTML = `Selected Elements: ${contadorElementosSelecionados -= 1} `;
        }
    }

    mapMaker.setAttribute('class', 'none');
});

poco.addEventListener('click', () => {

    mapa__svg.setAttribute('class', 'mapa__svg setentaPorcento');
    info.setAttribute('class', 'informacoes block');
    mapMaker.setAttribute('class', 'block');
    info.style.backgroundImage="url(img/informacoes.jpg)";
    
    blocos.style.display = 'none';
    campos.style.display = 'none';
    icone_bacia_do_panara.style.display = 'none';
    infoPocos.style.display = 'none';
    detalhesPoco.style.display = 'block';
    infoBlocos.style.display = 'none';
    infoCampos.style.display = 'none';
    infoBacias.style.display =  'none';
});