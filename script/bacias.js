const btnBacia = document.querySelector('#btnBacia');
const icone_bacia_do_panara = document.querySelector('#icone-bacia-do-parana');
const bacia_do_panara = document.querySelector('#bacia-do-parana');
const infoBacias = document.querySelector('#info-bacias');
const detalhesBacias = document.querySelector('.detalhesBacias');
let contador_icone_do_parana = true;

btnBacia.addEventListener('click', () => {

    if(btnBacia.checked){

        icone_bacia_do_panara.style.display = 'block';
        mapa__svg.setAttribute('class', 'mapa__svg setentaPorcento');
        info.setAttribute('class', 'informacoes block');
        info.style.backgroundImage="url(img/informacoes.jpg)";
        infoBacias.style.display = 'block';
        elementosSelecionados.innerHTML = `Elemetos selecionados: ${contadorElementosSelecionados += 1} `;
    } else if(btnPocos.checked || btnBlocos.checked || btnCampos.checked) {

        icone_bacia_do_panara.style.display = 'none';
        bacia_do_panara.style.display = 'none';
        infoBacias.style.display = 'none';
        detalhesBacias.style.display = 'none';
        elementosSelecionados.innerHTML = `Elemetos selecionados: ${contadorElementosSelecionados -= 1} `;
    } else {
        
        icone_bacia_do_panara.style.display = 'none';
        info.setAttribute('class', 'informacoes');
        bacia_do_panara.style.display = 'none';
        infoBacias.style.display = 'none';
        detalhesBacias.style.display = 'none';
        elementosSelecionados.innerHTML = `Elemetos selecionados: ${contadorElementosSelecionados -= 1} `;
    }
})

icone_bacia_do_panara.addEventListener('mouseover', () => {

        bacia_do_panara.style.display = 'block';
});
    
icone_bacia_do_panara.addEventListener('mouseout', () => {
    
    if(contador_icone_do_parana){

        bacia_do_panara.style.display = 'none';
    }
});

icone_bacia_do_panara.addEventListener('click', () => {
    
    contador_icone_do_parana = false;
    icone_bacia_do_panara.style.display = 'none';
    abreInfo();

    poco.style.display = 'none';
    blocos.style.display = 'none';
    campos.style.display = 'none';
    infoPocos.style.display = 'none';
    infoBacias.style.display =  'none';
    detalhesBacias.style.display = 'block';
});


