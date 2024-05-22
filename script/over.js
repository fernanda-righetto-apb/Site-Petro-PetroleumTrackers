const infoPocosH6 = document.querySelector('#info-pocos-h6');
console.log(infoPocosH6);
console.log(poco);
infoPocosH6.addEventListener('mouseover', () => {

    poco.style.width = '30px';
})

infoPocosH6.addEventListener('mouseout', () => {

    poco.style.width = '20px';
});

infoPocosH6.addEventListener('click', () => {

    blocos.style.display = 'none';
    campos.style.display = 'none';
    icone_bacia_do_panara.style.display = 'none';
    infoPocos.style.display = 'none';
    detalhesPoco.style.display = 'block';
    mapMaker.setAttribute('class', 'block');
});