var code = document.getElementById('code');
var wrapper = document.querySelector('#codeWrapper');
var br = document.querySelector('#br');

// CODEMIRROE CONFIG
var myCodeMirror = CodeMirror.fromTextArea(code, {
    lineNumbers: false,
    mode: 'javascript',
    lineWrapping: true,
    theme: 'monokai'
});

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
    document.querySelector('.CodeMirror').style.borderRadius = br.value + br.dataset.suffix;
}

// CHANGE BG
function changeBG(color) {
    wrapper.style.background = color;
}

// CREATE DOWNLOAD LINK
// function createLink(dataUrl) {
//     var link = document.createElement('a');
//     link.download = 'code-snap.jpeg';
//     link.href = dataUrl;
//     link.click();
// }

// SAVE IMAGE
function saveBlob() {
    domtoimage.toBlob(wrapper, {
        style: { 'margin': '0' }
    })
    .then(function(blob) {
        window.saveAs(blob, 'code-snap.png');
    });
}
