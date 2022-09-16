const inputSizeControl = document.querySelector('input#font-size-control');
const inputWord = document.querySelector('span#text');

inputSizeControl.addEventListener('input', event => {
    inputWord.style.fontSize = event.target.value + 'px'
});

