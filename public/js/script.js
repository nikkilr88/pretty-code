var code = document.getElementById('code');
var wrapper = document.querySelector('#codeWrapper');
var clone = document.querySelector('.clone');
var br = document.querySelector('#br');

// CODEMIRROE CONFIG
var myCodeMirror = CodeMirror.fromTextArea(code, {
    lineNumbers: false,
    mode: 'javascript',
    lineWrapping: true,
    theme: 'monokai'
});
console.log('define colors')
// CHANGE CODE WRAPPER BG
var colors = document.querySelectorAll('ul li');

for(var i = 0; i < colors.length; i++) {
    colors[i].addEventListener('click', function () {
        changeBG(this.getAttribute('data-color'));
    });
}

// CHANGE BORDER RADIUS
br.addEventListener('change', changeBR)
br.addEventListener('mousemove', changeBR)

// FUNCTION SHIZZ
function changeBR() {
    console.log(document.querySelector('.CodeMirror').style.borderRadius)
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
        .then(function(dataUrl) {
            var link = document.createElement('a');
            link.download = 'code-snap.jpeg';
            link.href = dataUrl;
            link.click();
        })
        .catch(function(error) {
            console.error('Oops, something went wrong!', error);
        });
}