const inputSizeControl = document.querySelector('input#font-size-control');
const inputWord = document.querySelector('span#text');

inputSizeControl.addEventListener('change', event => {
    inputWord.style.fontSize = event.currentTarget.value + 'px'
});

