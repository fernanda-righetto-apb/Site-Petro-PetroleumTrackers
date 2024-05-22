const infoPocosH6 = document.querySelector('#info-pocos-h6');
console.log(infoPocosH6);
console.log(poco);
infoPocosH6.addEventListener('mouseover', () => {

    poco.style.width = '30px';
})

infoPocosH6.addEventListener('mouseout', () => {

    poco.style.width = '20px';
})