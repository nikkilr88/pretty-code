const code = document.getElementById('code');
const wrapper = document.querySelector('#codeWrapper');
const clone = document.querySelector('.clone');
const br = document.querySelector('#br');

// CODEMIRROE CONFIG
const myCodeMirror = CodeMirror.fromTextArea(code, {
    lineNumbers: false,
    mode: 'javascript',
    lineWrapping: true,
    theme: 'monokai'
});

// CHANGE CODE WRAPPER BG
const colors = document.querySelectorAll('ul li');

colors.forEach(color => {
    color.addEventListener('click', () => {
        changeBG(color.dataset.color);
    })
})

// CHANGE BORDER RADIUS
br.addEventListener('change', changeBR)
br.addEventListener('mousemove', changeBR)

// FUNCTION SHIZZ
function changeBR() {
    document.querySelector('.CodeMirror').style.borderRadius = br.value + br.dataset.suffix;
}

function changeBG(color) {
    wrapper.style.background = color;
}

function snapJPEG() {
    let node = wrapper.cloneNode(true);
    node.style.margin = '0';
    clone.innerHTML = '';
    clone.appendChild(node)

    domtoimage.toJpeg(node, {
            quality: 1
        })
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = 'code-snap.jpeg';
            link.href = dataUrl;
            link.click();
        })
        .catch(function (error) {
            console.error('Oops, something went wrong!', error);
        });
}