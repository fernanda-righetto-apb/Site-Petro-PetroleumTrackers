const btnBlocos = document.querySelector('#btn-blocos');
const blocos = document.querySelector('#blocos');
const infoBlocos = document.querySelector('#info-blocos');
const detalhesBlocos = document.querySelector('.detalhesBlocos')
const infoBlocosH6 = document.querySelector('info-blocos-h6')

btnBlocos.addEventListener('click', () => {

    if(btnBlocos.checked){

        blocos.style.display = 'block';
        mapa__svg.setAttribute('class', 'mapa__svg setentaPorcento');
        info.setAttribute('class', 'informacoes block');
        info.style.backgroundImage="url(img/informacoes.jpg)";
        infoBlocos.style.display = 'block';
        if(!languageToggle.checked) {

            elementosSelecionados.innerHTML = `Elementos selecionados: ${contadorElementosSelecionados += 10} `;
        }  else {

            elementosSelecionados.innerHTML = `Selected Elements: ${contadorElementosSelecionados += 10} `;
        }
    } else if(btnPocos.checked || btnCampos.checked || btnBacia.checked){

        blocos.style.display = 'none';
        infoBlocos.style.display = 'none';
        detalhesBlocos.style.display = 'none';
        if(!languageToggle.checked) {

            elementosSelecionados.innerHTML = `Elementos selecionados: ${contadorElementosSelecionados -= 10} `;
        }  else {

            elementosSelecionados.innerHTML = `Selected Elements: ${contadorElementosSelecionados -= 10} `;
        }
    } 
    else {
        detalhesBlocos.style.display = 'none';
        infoBlocos.style.display = 'none';
        blocos.style.display = 'none';
        info.setAttribute('class', 'informacoes');
        if(!languageToggle.checked) {

            elementosSelecionados.innerHTML = `Elementos selecionados: ${contadorElementosSelecionados -= 10} `;
        }  else {

            elementosSelecionados.innerHTML = `Selected Elements: ${contadorElementosSelecionados -= 10} `;
        }
    }
});

blocos.addEventListener('click', () => {

    poco.style.display = 'none';
    campos.style.display = 'none';
    icone_bacia_do_panara.style.display = 'none';
    infoPocos.style.display = 'none';
    infoBlocos.style.display = 'none';
    detalhesBlocos.style.display = 'block';
    infoPocosH6.style.display = 'none';
    infoCampos.style.display = 'none';
    infoBacias.style.display =  'none';
})