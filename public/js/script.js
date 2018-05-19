const code = document.getElementById('code');
const wrapper = document.querySelector('#codeWrapper');
const imgArea = document.querySelector('#imgs');
const clone = document.querySelector('.clone');

const colors = document.querySelectorAll('ul li');

colors.forEach(color => {
    color.addEventListener('click', () => {
        changeBG(color.dataset.color);
    })
})

const myCodeMirror = CodeMirror.fromTextArea(code, {
    lineNumbers: false,
    mode: 'javascript',
    lineWrapping: true,
    theme: 'monokai'
});

function changeBG(color) {
    wrapper.style.background = color;
}

function snap() {
    let node = wrapper.cloneNode(true);
    node.style.margin = '0';
    clone.innerHTML = '';
    clone.appendChild(node)

    domtoimage.toPng(node)
    .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        imgArea.innerHTML = '';
        imgArea.appendChild(img);
    })
    .catch(function (error) {
        console.error('Oops, something went wrong!', error);
    });
}