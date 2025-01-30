const detailedImage = document.querySelector('.detailedContainer--image');
const detailedTitle = document.querySelector('.detailedContainer--title');

const boxesElements = document.querySelectorAll('.box');

function setDetails(boxedElement){
    detailedImage.alt = boxedElement.getAttribute('data-alt-text');
    detailedTitle.innerHTML = boxedElement.getAttribute('data-detailed-text');

}
for(let i = 0; i < boxesElements.length; i++) {
    boxesElements[i].addEventListener('click', function(){
        setDetails(boxesElements[i]);
    })
}
